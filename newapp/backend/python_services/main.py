from fastapi import FastAPI
from pydantic import BaseModel
from fastapi import Request

class PdfRequest(BaseModel):
    pdf_path: str

app = FastAPI()
PDF_PATH_FOR_RAG = None

@app.get("/")
def home():
    return{
        "message": "FastAPI is working...."
    }

# @app.post("/process")
# def process_pdf(data:pdfRequest):
#     return{
#         "recieved_path": data.pdf_path
#     }

# @app.post("/process")
# async def process_pdf(request: Request):
#     body = await request.json()

#     return {
#         "body": body
#     }

@app.post("/process")
def process_pdf(data: PdfRequest):
    PDF_PATH_FOR_RAG = data.pdf_path
    print(data.pdf_path)
    return {
        "received_path": PDF_PATH_FOR_RAG
    }
