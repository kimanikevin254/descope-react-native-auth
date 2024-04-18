import express from 'express'
import DescopeClient from '@descope/node-sdk'
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { extractAndValidateToken } from './utils/extractAndValidateToken.js';

// Initialize Descope client
const descopeClient = DescopeClient({ projectId: process.env.DESCOPE_PROJECT_ID });

// Initialize prisma client
const prisma = new PrismaClient()

const app = express()
const port = 3000

// Parse request bodies
app.use(express.json())

app.get('/', async (req, res) => {
    try {
        // Extract and validate the session token
        const authInfo = await extractAndValidateToken(req, descopeClient)

        // Return the necessary data for each type of user by validating the roles
        // For editors, return both published and unpublished posts
        if(descopeClient.validateRoles(authInfo, ['editor'])){
          const posts = await prisma.post.findMany()

          res.status(200).json({ posts })
        } else {
          // For viewers, return only the published posts
          const posts = await prisma.post.findMany({
            where: { published: true }
          })

          res.status(200).json({ posts })
        }
      } catch (error) {
        console.log ("Could not validate user session " + error.message);
        if(error.message.includes('JWTExpired')){
          res.status(400).json({ message: 'Session expired' })
        } else {
          res.status(500).json({ message: 'An error occured' })
        }
      } finally {
        await prisma.$disconnect()
      }
})

// Publish/unpublish a post
// This action should only be performed by editors
app.post('/toggle-publish', async (req, res) => {
  try {
    // Extract and validate the session token
    const authInfo = await extractAndValidateToken(req, descopeClient)

    // Verify that the user's role allows them to publish/unpublish a post
    if(descopeClient.validateRoles(authInfo, ['editor'])){
      // Extract postId from request body
      const { postId } = req.body

      // Find the post by its ID
      const existingPost = await prisma.post.findUnique({
        where: { id: postId }
      })

      // Raise error if no post is found
      if(!existingPost){
        return res.status(404).json({
          message: 'Post not found'
        })
      }

      // Toggle the published status
      const updatedPost = await prisma.post.update({
        where: { id: postId },
        data: { published: !existingPost.published }
      })

      res.status(200).json({ updatedPost })
    } else {
      // Return a 400-Unauthorized code for  non-editors
      res.status(400).json({
        message: 'You are not authorized to perform this action'
      })
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'An error occured'
    })
  } finally {
    await prisma.$disconnect()
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})