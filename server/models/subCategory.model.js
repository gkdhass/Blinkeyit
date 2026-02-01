import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    name : {
        type : String,
        default : ""
    },
    image : {
        type : String,
        default : ""
    },
    category : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "category"
        }
    ]
},{
    timestamps : true
})

const subCategoryModel = mongoose.model('subcategory', subCategorySchema);

export default subCategoryModel;