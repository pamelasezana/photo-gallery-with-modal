import { Photo } from "@/types/Photo"

type Props = {
    photo:Photo;
    btnClick: () => void;
}



export const PhotoItem = ({photo, btnClick}:Props) => {
    return(
        <div onClick={btnClick} className="cursor:pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt="" className="w-full" />
        </div>
    )
}