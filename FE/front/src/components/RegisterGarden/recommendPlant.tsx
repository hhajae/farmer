import { useState } from 'react'
import tomato from '../../assets/img/plants/1.png'
import pepper from '../../assets/img/plants/2.png'
import lettuce from '../../assets/img/plants/3.png'
import perilla from '../../assets/img/plants/4.png'
import cabbage from '../../assets/img/plants/5.png'
import farmPlants from '../../assets/dummydata/plantRecommend.json'
import '../../styles/RegisterGarden/gardenSelect.css'
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import GardenModal from './gardenModal'
import { useDispatch, useSelector } from 'react-redux'
import { UseSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Root } from 'react-dom/client'

function RecommendPlant() {

    // const dispatch = useDispatch(); // 디스패치 함수 
    const [selectedPlace, setSelectedPlace] = useState<string | null>(null); // 선택된 장소를 저장할 상태
    const [isModalOpen, setIsModalOpen] = useState(false)  // 모달 열림 상태
    const [selectPlaceId, setSelectPalceId] = useState<number|null>(null) // 장소 id 저장
    const farmData = useSelector((state:RootState) => state.farmSelect.farm)

    const imageMapping: {[key:string]: string} = {
        1:tomato,
        2:pepper,
        3:lettuce,
        4: perilla,
        5: cabbage
    }

    const handleImageClick = (placeName :string, placeId:number) => {
        // setSelectedPlace(place); // 선택한 장소 저장
        // console.log(`${placeName}`)
        // console.log(`${placeId}`)
        setSelectedPlace(placeName)
        // dispatch(setFarmData(placeName))   //farm 데이터에 선택한 장소 이름 저장
        setSelectPalceId(placeId)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };


    return(
         <div className='frame'>
            <div className='farm-instruction'>{farmData}에서 키우기 좋은 작물이에요!</div>
            <div className='image-group'>
                {farmPlants.map(plant => (
                    <div className={`image-container ${plant.isService ? '': 'blur'}`} // 서비스하지 않는 텃밭은 흑백 처리
                     key={plant.plantId}
                    onClick={plant.isService ? () => handleImageClick(plant.plantName, plant.plantId) : undefined} // 클릭 이벤트 설정
                    >     
                     {plant.isFavorite && <FaHeart className='heart-icon' />}
                     {/* 왼쪽 조건이 True일 때만 오른쪽에 있는 값을 반환 */}
                    {plant.isRecommend && <FaStar className='star-icon'/>}
                    <img
                        src={imageMapping[plant.plantId]}
                        alt={`${plant.plantName} 이미지`}
                        className='image-size'
                    />
                    <div className='farm-name'>{plant.plantName}</div>
                </div>
                ))}
            </div>
            {/* {isModalOpen && <GardenModal  placeId={selectPlaceId}  />} 모달 조건부 렌더링 */}
        </div>
    )
}

export default RecommendPlant