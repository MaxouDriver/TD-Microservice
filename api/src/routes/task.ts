import {Router, Request, Response} from 'express';
import {PoolClient} from 'pg';
import pool from '../database';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    pool.connect(function(err: Error, client: PoolClient, done: Function) {
        if (err) {
            res.status(500).send({message: "Can not connect to the DB because of " + err});
            return;
		}

		const query = 'SELECT * FROM "task";'

		client.query(query, function(err, result) {
			done();

			if (err) {
				console.log(err);
				res.status(400).send({ message: err });
				return;
			}

			res.status(200).send(result.rows);
		});


	});
});

router.post('/', (req: Request, res: Response) => {
    pool.connect(function(err: Error, client: PoolClient, done: Function) {
        if (err) {
            res.status(500).send({message: "Can not connect to the DB because of " + err});
            return;
		}

		const {
            title_task
        } = req.body;

		const query = {
            name: 'create-task',
            text: `INSERT INTO "task" (
				title_task
			) VALUES (
				$1
			) RETURNING *`,
            values: [title_task]
        }


		client.query(query, function(err, result) {
			done();

			if (err) {
				console.log(err);
				res.status(400).send({ message: err });
				return;
			}

			res.status(200).send(result.rows);
		});
	});
});

router.delete('/:id', (req: Request, res: Response) => {
    pool.connect(function(err: Error, client: PoolClient, done: Function) {
        if (err) {
            res.status(500).send({message: "Can not connect to the DB because of " + err});
            return;
		}

		const {
            id
        } = req.params;

		const query = {
            name: 'delete-task',
            text: `DELETE FROM "task" WHERE id_task=$1`,
            values: [id]
        }

		client.query(query, function(err, result) {
			done();

			if (err) {
				console.log(err);
				res.status(400).send({ message: err });
				return;
			}

			res.status(200).send(result.rows);
		});


	});
});

export default router;