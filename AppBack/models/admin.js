import mongoose from "mongoose"


const adminSchema = mongoose.Schema({ 

        full_name: {
                type: String,
                required: true
                },
        email: {
                type: String,
                required: true,
                },
        password: {
                type: String,
                required: true,
                unique: true
        },
        phone: {
                type: Number,
                required: true
        },
        role: {
                type: String,
                required: true
        }

})
        
export default mongoose.model('administradores', adminSchema)