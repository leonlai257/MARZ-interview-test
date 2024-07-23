from marshmallow import Schema, fields, pre_load, validate

class ProductSchema(Schema):
    ProductID = fields.Int()
    ProductStatus = fields.Str(validate=validate.OneOf(["Active", "Inactive"]))
    ProductName = fields.Str()
    ProductPhotoURL = fields.Str()
    @pre_load
    def make_object(self, data, **kwargs):
        return data
