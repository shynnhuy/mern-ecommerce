const Joi = require("joi");
const HttpStatus = require("http-status-codes");

const ShopRequest = require("../models/ShopRequest");
const Shop = require("../models/Shop");

module.exports = {
  async CreateRequest(req, res) {
    const schema = Joi.object({
      name: Joi.string().max(35).required(),
      address: Joi.string().required(),
      identityCard: Joi.string().required(),
      categories: Joi.array().required(),
    });

    console.log(req.body);

    const { error, value } = schema.validate(req.body);

    if (error && error.details) {
      console.log(error);
      console.log(error.details);
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.details });
    }

    const newRequest = new ShopRequest({
      ...value,
      owner: req.user.id,
    });

    const requestDoc = await newRequest.save();
    if (!requestDoc) {
      return res
        .status(500)
        .json({ message: "Error when saving your request" });
    }
    console.log(requestDoc);
    res.status(201).json({ message: `Your request has been submitted` });
  },

  async GetAllRequest(req, res) {
    const requests = await ShopRequest.find().populate("owner", "displayName");
    if (requests.length >= 1) {
      return res.status(200).json(requests);
    }
  },

  async ChangeRequestStatus(req, res) {
    const { id } = req.params;
    const reqStatus = req.body.status;
    const request = await ShopRequest.findById(id);
    if (!request) {
      return res
        .status(403)
        .json({ message: `Request with id [${id}] is not exist` });
    }
    const raw = await ShopRequest.findByIdAndUpdate(
      id,
      { status: reqStatus },
      { new: true }
    ).populate("owner", "displayName");

    if (!raw) {
      return res.status(500).json({ message: `Error when edit the request` });
    }
    const { status, ...doc } = raw.toJSON();
    const shop = new Shop({ ...doc, owner: doc.owner._id });
    console.log(shop);
    // res.json({ message: "Request updated", result: raw });
  },
};
