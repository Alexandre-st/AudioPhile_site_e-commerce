type Props = {
  name: string;
  classname: string;
};

const ProductButton = (props: Props) => {
  const { name, classname } = props;

  return <button className={classname}>{name}</button>;
};

export default ProductButton;
