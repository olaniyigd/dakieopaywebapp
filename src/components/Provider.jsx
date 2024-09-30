import ImageGrid from "./ImageGrid";

export default function ServiceProvider () {
    return(
        <div>
            <div className="flex flex-col justify-center items-center gap-5 py-10">
            <p className="text-gray-800 text-[25px] font-[500] text-center w-[45%]">Connected to over 30+ service providers, DakieoPay simplifies transactions. </p>
            <p className="text-[14px] text-gray-700">making life easier for our users.</p>
            </div>
            <ImageGrid />
        </div>
    )
}