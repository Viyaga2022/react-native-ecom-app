const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            default: false,
        },
        verificationToken: String,
        address: [
            {
                name: String,
                mobileNo: String,
                houseNo: String,
                street: String,
                landmark: String,
                city: String,
                state: String,
                country: {
                    type:String,
                    default:"India"
                },
                pincode: String,
            }
        ],
        orders: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Order"
            }
        ],
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model("User", userSchema)