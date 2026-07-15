import artGallery from '../../assets/koartgallerytemplate1_mobile.webp'
import bookStore from '../../assets/kobookstoretemplate_mobile.webp'
import healthAlterative from '../../assets/kohealthalternativetemplate_desktop.webp'
import homeHouse from '../../assets/kohomehousewarestemplate_desktop.webp'
import furniture from '../../assets/koretailfurniturebttemplate_desktop.webp'
import singleProduct from '../../assets/retailsingleproduct_mobile.webp'

function TemplateSection() {

    const imgArr: string[] = [singleProduct, healthAlterative, bookStore, furniture, artGallery, homeHouse]
    const duplicateImgArr: string[] = [...imgArr, ...imgArr]

    return (
        <>
            <div className="bg-slate-100 border">
                <div className="text-center space-y-6">
                    <h1 className="font-bold text-5xl tracking-wide">Templates designed to sell</h1>
                    <p className="text-xl">Choose from 100s of designs for every idea and industry.</p>
                </div>

                <div className="overflow-hidden border-2 py-10">
                    <div className="imgMarquee flex w-max gap-15">
                        {duplicateImgArr.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className="h-125 w-auto object-cover rounded-xl shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TemplateSection