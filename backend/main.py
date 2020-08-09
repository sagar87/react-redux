from typing import Optional, List

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:9000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = [
    {"id": 1, "description": "Bug 1", "userId": 1, "resolved": True},
    {"id": 2, "description": "Bug 1", "userId": 1},
    {"id": 3, "description": "Bug 3", "userId": 2},
    {"id": 4, "description": "Bug 4"},
]

class Bug(BaseModel):
    description: Optional[str] = None
    userId: Optional[int] = None
    resolved: Optional[bool] = None

class BugResponse(Bug):
    id: int
    
@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/bugs", response_model=List[BugResponse])
def get_all_bugs():
    return db

@app.post("/bugs", response_model=BugResponse)
def post_bug(bug: Bug):
    new_bug = dict(bug)
    new_bug['id'] = len(db) + 1
    db.append(new_bug)
    print(new_bug)
    return new_bug

@app.patch("/bugs/{id}", response_model=BugResponse)
def post_bug(id: int, bug: Bug):
    bugs_ids = [ db[i]['id'] for i in range(len(db)) ]
    print (db)
    if id in bugs_ids:
        bug_id = bugs_ids.index(id)        
        for k, v in bug.dict(exclude_unset=True).items():
            db[bug_id][k] = v

    return db[bug_id]


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}