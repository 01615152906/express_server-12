
// step 1


// import  express, { Request, Response }  from 'express';
// import { pool } from '../../config/db';
// import { userControllers } from './user.controller';

// const router = express.Router();

// // router.post("/", async (req: Request, res: Response ) =>{
   
// // try {

// //         const {name, email} = req.body;
// //     const result = await pool.query(`
// //         INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
// //     [name, email]
// //     );

    
// //     // console.log(result.rows[0]);
// //      res.status(201).json({
// //         success: false,
// //         message:"data inserted success Fully",
// //         data: result.rows[0],
// //     })
// //     res.send({message:"data inserted"})
    
// // } catch (err: any) {
// //     res.status(500).json({
// //         success: false,
// //         message: err.message
// //     })
    
// // }

// // });

// router.post("/", userControllers.createUser)

// // router.get("/", async (req: Request, res: Response) => {
// //   try {
// //     const result = await pool.query(`SELECT * FROM users`);

// //     res.status(200).json({
// //       success: true,
// //       message: "Users retrieved successfully",
// //       data: result.rows,
// //     });
// //   } catch (err: any) {
// //     res.status(500).json({
// //       success: false,
// //       message: err.message,
// //       datails: err,
// //     });
// //   }
// // })

// router.get("/", userControllers.getUser )

// router.get("/:id", userControllers.getSingleUser)

// router.put("/:id", userControllers.updateUser)
// router.delete("/:id", userControllers.deleteUser)

// export const userRoutes = router;




// step 2


import  express, { Request, Response }  from 'express';
import { pool } from '../../config/db';
import { userControllers } from './user.controller';
import logger from '../../middleware/logger';
import auth from '../../middleware/auth';

const router = express.Router();

router.post("/", userControllers.createUser)

router.get("/", logger, auth("admin"), userControllers.getUser )

router.get("/:id", userControllers.getSingleUser)

router.put("/:id", userControllers.updateUser)
router.delete("/:id", userControllers.deleteUser)

export const userRoutes = router;



