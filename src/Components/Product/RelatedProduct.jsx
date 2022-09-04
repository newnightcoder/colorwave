const RelatedProduct = ({ related, linkToRelatedProduct, parentProduct }) => {
  return (
    <div className="h-36 md:h-60 cursor-pointer" onClick={() => linkToRelatedProduct(related, parentProduct)}>
      <img className="object-contain h-full w-full" src={related.media.source} alt={related.name} />
      <div>{related.name}</div>
    </div>
  );
};

export default RelatedProduct;
