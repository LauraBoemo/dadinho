import { useEffect, useMemo, useState } from "react";
import { FieldProps } from "formik";
import { useGetUsers } from "../../../../apis/user/useGetUsers";
import { useError } from "../../../../utils/ErrorProvider";
import { useLoader } from "../../../../utils/LoaderProvider";
import { DadinhoInput } from "../../../common";
import DadinhoAutocomplete from "../../../common/DadinhoAutocomplete";

export interface TeacherSelectProps extends FieldProps<UserOption> {
  placeholder: string;
  label: string;
}

interface UserOption {
  id: string;
  name: string;
}

export function TeacherSelect({ form, field, ...props }: TeacherSelectProps) {
  const [searchKey, setSearchKey] = useState<string>();
  const [getUsers, users, usersLoading, usersError] = useGetUsers();

  const { setLoader } = useLoader();
  const { setError } = useError();

  useEffect(() => {
    getUsers({ role: "TEACHER" })
  }, []);

  useEffect(() => {
    setLoader(usersLoading, "usersLoading");
    return () => setLoader(false, "usersLoading");
  }, [usersLoading]);

  useEffect(() => {
    if (usersError) setError(usersError?.message);
  }, [usersError]);

  const handleUserSelection = (_event: any, item: any) => {
    form.setFieldValue(field.name, item.id);
  };

  const options: Array<UserOption> = useMemo(() => {
    if (!users) return [];
    return (users as any[])
      ?.filter(({ user }) => !searchKey || user.name.match(new RegExp(searchKey, "i")))
      .map(({ user }) => ({ id: user.id, name: user.name }));
  }, [users, searchKey]);

  return (
    <DadinhoAutocomplete
      freeSolo={false}
      clearIcon={null}
      popupIcon={null}
      onChange={handleUserSelection}
      options={options?.length ? options : []}
      getOptionLabel={({ name }: any) => name}
      sx={{ ".MuiAutocomplete-input": { pl: "4px !important" } }}
      value={options.find((option: UserOption) => option.id === field.value?.id)}
      isOptionEqualToValue={(option: UserOption, value: UserOption) => option.id === value?.id}
      renderInput={(params: any) => (
        <DadinhoInput
          field={{ ...field, value: searchKey, onChange: (e: any) => setSearchKey(e.target.value) }}
          form={form}
          {...params}
          {...props}
          InputLabelProps={{ required: true }}
          InputProps={{
            ...params.InputProps,
          }}
        />
      )}
    />
  );
}
