import ImageGrid from "@/components/ImageGrid"

const page = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto pt-14">
        <h1 className="text-4xl text-white text-center py-10">
          Photos
          </h1>
        <ImageGrid/>
      </div>
      
    </div>
    
  )
}

export default page