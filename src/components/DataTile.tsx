interface Props {
  title: string;
  children: React.ReactNode;
}
export const DataTile = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col bg-white shadow min-w-72 rounded-md dark:bg-gray-700 dark:text-white dark:shadow-gray-900">
      <h3 className="border-b border-b-gray-100 p-3">{title}</h3>
      <div className="p-3 text-sm">{children}</div>
    </div>
  );
};
