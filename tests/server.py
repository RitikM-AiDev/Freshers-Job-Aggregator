from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
from fastapi.responses import FileResponse
from csv_agent import a2a
from internshala import internshala_search
from naukri import naukri_search
from linkedin_AI_engineer import test_linkedin_navigation_ai
from linkedin_ML_engineer import test_linkedin_navigation_ml

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Message(BaseModel):
    request: str


@app.post("/search")
def search(data: Message):
    print(data.request)
    internshala = internshala_search()
    naukri = naukri_search()
    linkedin_ai = test_linkedin_navigation_ai()
    linkedin_ml = test_linkedin_navigation_ml()
    if os.path.exists("jobs.csv"):
        os.remove("jobs.csv")
    list_jobs_csv = []
    list_jobs_csv.extend(internshala)
    list_jobs_csv.extend(naukri)
    list_jobs_csv.extend(linkedin_ai)
    list_jobs_csv.extend(linkedin_ml)
    csv_path = a2a(list_jobs_csv)
    path = csv_path
    return FileResponse(path, media_type='text/csv', filename="jobs.csv")