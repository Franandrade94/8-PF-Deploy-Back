const Router = require('express');
const { postReviews } = require('../../controllers/reviews/postReviews');
const { getReviews } = require('../../controllers/reviews/getReviews');
// const { reviewsVerified } = require('../../controllers/reviews/reviewsVerified');

const reviewsRouter = Router();

// GET
reviewsRouter.get('/', getReviews);

// POST
reviewsRouter.post('/', postReviews);
 
module.exports = reviewsRouter;