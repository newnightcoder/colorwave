const RelatedProduct = ({ related, linkToRelatedProduct, parentProduct }) => {
  const cloudinaryCdnPrefix = "https://my-cloud-cdn.mo.cloudinary.net/colorwave";
  const commercejsCdn = "https://cdn.chec.io";
  const imgSource = related?.media.source.replace(commercejsCdn, cloudinaryCdnPrefix);

  return (
    <div className="h-36 md:h-60 cursor-pointer" onClick={() => linkToRelatedProduct(related, parentProduct)}>
      <img className="object-contain h-full w-full" src={imgSource} alt={related.name} />
      <div>{related.name}</div>
    </div>
  );
};

export default RelatedProduct;
