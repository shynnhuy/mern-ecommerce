const cloudinary = require("../utils/cloudinary");
const _ = require("lodash");
const Category = require("../models/Category");

module.exports = {
  async GetCategory(req, res) {
    const categories = await Category.find();
    res.status(200).json(categories);
  },
  async CreateCategory(req, res) {
    const { name } = req.body;
    console.log(req.file);
    try {
      const uploaded = await cloudinary.uploadSingle(req.file.path, "category");
      if (!uploaded) {
        return res.status(403).json({ message: "Upload failed" });
      }

      const existCategory = await Category.findOne({ name });
      if (existCategory) {
        return res
          .status(409)
          .json({ message: `Category name [${name}] is already exists!` });
      }

      const newCategory = new Category({
        name,
        code: _.camelCase(name),
        imageUrl: uploaded.url,
      });
      newCategory.save().then((newDoc) => {
        if (!newDoc) {
          return res.status(500).json({ message: "Something went wrong" });
        }
        res
          .status(201)
          .json({
            message: `Category [${newDoc.name}] created.`,
            result: newDoc,
          });
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong" });
    }
    // async CreateCategory(req, res) {
    //   const { name, image } = req.body;
    //   try {
    //     const uploadResponse = await cloudinary.uploader.upload(image, {
    //       upload_preset: "nnyhs",
    //     });

    //     const existCategory = await Category.findOne({ name });
    //     if (existCategory) {
    //       return res
    //         .status(409)
    //         .json({ message: `Category name [${name}] is already exists!` });
    //     }

    //     const newCategory = new Category({
    //       name,
    //       code: _.camelCase(name),
    //       imageUrl: uploadResponse.url,
    //     });
    //     newCategory.save().then((newDoc) => {
    //       if (!newDoc) {
    //         return res.status(500).json({ message: "Something went wrong" });
    //       }
    //       res.status(201).json({ message: `Category [${newDoc.name}] created.` });
    //     });
    //   } catch (err) {
    //     console.error(err);
    //     res.status(500).json({ message: "Something went wrong" });
    //   }
  },
};
