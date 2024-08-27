const FoodMenuPage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-2 p-4'>
      <iframe
        src='/food-essenza.pdf'
        width={300}
        height={900}
        className='w-full'></iframe>
    </div>
  );
};

export default FoodMenuPage;
