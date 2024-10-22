import categories from "../categories";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  item: z
    .string()
    .min(1, { message: "Minimum 1 and maximum 100 characters" })
    .max(100),
  amount: z
    .number({ invalid_type_error: "Amount Required" })
    .min(1)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type EventData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: EventData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Item Name
        </label>
        <input {...register("item")} type="text" className="form-control" />
        {errors.item && <p className="text-danger">{errors.item.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Category
        </label>
        <select {...register("category")} className="form-select" id="category">
          <option value=""></option>
          {categories.map((category) => (
            <option id={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">SUBMIT</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
