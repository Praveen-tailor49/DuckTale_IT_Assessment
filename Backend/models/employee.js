import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
    },
  },
  { strict: false }
);

export default mongoose.model("employee", employeeSchema);
