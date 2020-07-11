export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    lastModified: {
      type: String,
      required: true,
    },
  });

  schema.method('toJSON', function () {
    const { __v, __id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const grades_schema = mongoose.model('grades', schema, 'grades');

  return grades_schema;
};
