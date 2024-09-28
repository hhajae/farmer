# 모든 스키마 클래스는 Pydantic의 BaseModel을 상속받아 정의된다. 데이터 검증, 직렬화, 역직렬화 기능 제공.
from pydantic import BaseModel
# Python 타입 힌팅 도구로 필드가 선택적일 때 사용. Ex) Optional[str]은 이 필드가 str or None임을 의미.
from typing import Optional
from datetime import datetime

class Farm(BaseModel):
    id : int
    plant_id : int
    place_id : int
    user_id : int
    farm_DDs : int
    is_completeed : int
    is_deleted : bool
    is_harvest : bool
    complete_date : datetime
    create_date : datetime
    delete_date : datetime
    harvest_date : datetime
    start_date : datetime
    memo : str
    crop_name : str
    
    # SQLAlchemy의 모델 객체를 Pydantic 스키마로 쉽게 변환할 수 있게 해서 FastAPI가 자동으로 데이터 직렬화를 해준다.    
    class Config:
        from_attributes = True
        