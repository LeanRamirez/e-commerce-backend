// 'use strict';
// // @ts-ignore
// const stripe = require("stripe")(
//     "sk_test_51PtEkLB1uf8gCR6mMdH61NIH8gdfkU5RtHiX3WThrm7JoGjkjMcw8ejeYGV4QqMoHsFbOQrXY5cCFdNSgRlbUrXO00O0ORct93",
// );

// function calcDiscountPrice (price, discount){
//     if (!discount) return price;

//     const discountAmount = (price * discount) / 100;
//     const result = price - discountAmount;

//     return result.toFixed(2)
// };

// /**
//  * order controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::order.order', ({ strapi }) => ({
//     async paymentOrder(ctx) {
//         const { token, products, userId, addressShipping } = ctx.request.body;

//         let totalPayment = 0
//         products.forEach((product) => {
//             const priceTemp = calcDiscountPrice(product.price, product.discount);

//             totalPayment += Number(priceTemp) * product.quantity;
//         });

//         const charge = await stripe.charge.create({
//             amount: Math.round(totalPayment * 100),
//             currency: "eur",
//             source: token,
//             description: `User ID: ${userId}`
//         });

//         const data = {
//             products,
//             user: userId,
//             totalPayment,
//             idPayment: charge.id,
//             addressShipping
//         };

//         const model = strapi.contentTypes["api::order.order"];
//         const validData = await strapi.entityValidator.validateEntityCreation(
//             model,
//             data
//         );

//         const entry = strapi.db.query("api::order.order").create({data: validData});
//         return entry;

//     }
// }));


'use strict';
// @ts-ignore
const stripe = require("stripe")(
    "sk_test_51PtEkLB1uf8gCR6mMdH61NIH8gdfkU5RtHiX3WThrm7JoGjkjMcw8ejeYGV4QqMoHsFbOQrXY5cCFdNSgRlbUrXO00O0ORct93",
);

// Corregido: Cambié la declaración de la función a la forma correcta
function calcDiscountPrice(price, discount) {
    if (!discount) return price;

    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;

    return result.toFixed(2);
}

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async paymentOrder(ctx) {
        console.log(ctx.request.body);
        // const { token, products, userId, addressShipping } = ctx.request.body;

        // let totalPayment = 0;
        // products.forEach((product) => {
        //     const priceTemp = calcDiscountPrice(product.price, product.discount);

        //     totalPayment += Number(priceTemp) * product.quantity;
        // });

        // // Corregido: Usé stripe.charges.create en lugar de stripe.charge.create
        // const charge = await stripe.charges.create({
        //     amount: Math.round(totalPayment * 100),
        //     currency: "eur",
        //     source: token,
        //     description: `User ID: ${userId}`
        // });

        // const data = {
        //     products,
        //     user: userId,
        //     totalPayment,
        //     idPayment: charge.id,
        //     addressShipping
        // };

        // const model = strapi.contentTypes["api::order.order"];
        // const validData = await strapi.entityValidator.validateEntityCreation(
        //     model,
        //     data
        // );

        // const entry = await strapi.db.query("api::order.order").create({ data: validData });
        // return entry;
    }
}));
