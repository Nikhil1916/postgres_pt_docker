import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const userRouter = Router();
interface addUser {
  firstName: string;
  lastName: string;
  username: string,
  password: string
}

interface User {
  firstName: string;
  lastName: string;
  username: string,
  password: string,
  id: number,
}

userRouter.get('/', async (req: Request, res: Response) => {
  try {
    const users: User[] = await prisma.user.findMany();
    console.log(users);
    res.json({
      users
    }) 
  } catch(e) {
    res.json({
      e
    })
  }
});

userRouter.get('/:id', async(req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user: User | null = await prisma.user.findUnique({
      where:{
        id:+id
      },
      include:{
        todos: true
      }
    });
    if(!user) {
      res.json({
        err: "User not there"
      });
      return;
    }
    res.json({
      user
    }) 
  } catch(e) {
    res.json({
      e
    })
  }
});

userRouter.post('/', async(req: Request, res: Response) => {
  const body:addUser = req.body;
  let user = null;
  try {
    user = await prisma.user.create({
      data: {
        ...body
      }
    })
  } catch(e) {
    res.json({
      e
    })
  }
  res.json({
    user
  })
});

userRouter.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`Update User with ID: ${id}`);
});

export default userRouter;
