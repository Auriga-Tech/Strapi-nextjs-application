module.exports = {
    async afterUpdate(event) {
        const { result } = event;
        console.log(result)
        try {
            await strapi.plugins['email'].services.email.send({
                to: result.email,
                from: 'sharma.rahul@aurigait.com',
                subject: 'Application Status  ',
                html: (result.status == 'PENDING') ? (`<h1>Thank You for choosing STITCH </h1><br />
                <h3>Your application is in PENDING state</h3>`) : ((result.status == 'ASSIGNED') ? (`<h3>Your application has been assigned to : ${result.assigned_to[0].username}<h3><br />
                <h3>We will contact you further.</h3>`) : (`<h1>Thank you for choosing STITCH.</h1><br />
                <h3> Your application status is : COMPLETED</h3>`))
            })
        } catch (err) {

        }
    }

}