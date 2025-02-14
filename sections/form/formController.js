import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

const FormControl = () => {
  return (
    <div>
      <Form>
        <FormField
          control={control}
          name="..."
          render={() => (
            <FormItem>
              <FormLabel />
              <FormControl>
              <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  );
};

export default FormControl;
