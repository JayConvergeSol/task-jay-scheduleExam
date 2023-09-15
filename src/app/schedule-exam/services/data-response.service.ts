import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataResponseService {

  constructor() { }

  responseData = {
    "statusCode": 200,
    "isSuccess": true,
    "response": [
      {
        "id": 44,
        "examDate": "2023-06-28T00:00:00",
        "presentCandidates": [
          {
            "id": "97113a4a-745d-4a87-889a-8578a3c0e5aa",
            "fullname": "Harsh Patel",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [
          {
            "id": "0b724567-7e36-4036-a957-67447f0c2a62",
            "fullname": "Fourth User",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "108f5934-4f65-4b88-9e66-d4461d2fddcf",
            "fullname": "test user",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "0db220f7-b501-451f-b666-ff583ac529b3",
            "fullname": "local user",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 43,
        "examDate": "2023-06-28T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 42,
        "examDate": "2023-06-30T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [
          {
            "id": "b8abbac2-5ad8-42ce-a9b5-14c9e1c1e12a",
            "fullname": "hardik solanki",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "0c102197-89b9-4e00-b94e-3697bec3eb79",
            "fullname": "shreya panchal",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "7f56daa0-869a-4101-b00f-f6d943951979",
            "fullname": "test user",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 41,
        "examDate": "2023-06-01T00:00:00",
        "presentCandidates": [
          {
            "id": "97113a4a-745d-4a87-889a-8578a3c0e5aa",
            "fullname": "Harsh Patel",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [
          {
            "id": "0b724567-7e36-4036-a957-67447f0c2a62",
            "fullname": "Fourth User",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "0db220f7-b501-451f-b666-ff583ac529b3",
            "fullname": "local user",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 40,
        "examDate": "2023-05-23T00:00:00",
        "presentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 39,
        "examDate": "2023-05-15T00:00:00",
        "presentCandidates": [
          {
            "id": "b6f0e59c-3b4a-4d92-9bda-e715d8e318ed",
            "fullname": "bijal malvi",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 38,
        "examDate": "2023-05-15T00:00:00",
        "presentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 37,
        "examDate": "2023-05-15T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 36,
        "examDate": "2023-05-15T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 3,
        "status": "Incomplete"
      },
      {
        "id": 35,
        "examDate": "2023-05-14T00:00:00",
        "presentCandidates": [
          {
            "id": "97113a4a-745d-4a87-889a-8578a3c0e5aa",
            "fullname": "Harsh Patel",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [
          {
            "id": "0b724567-7e36-4036-a957-67447f0c2a62",
            "fullname": "Fourth User",
            "statusId": 1,
            "status": "Pending"
          },
          {
            "id": "0db220f7-b501-451f-b666-ff583ac529b3",
            "fullname": "local user",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 34,
        "examDate": "2023-05-12T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 33,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [
          {
            "id": "b6f0e59c-3b4a-4d92-9bda-e715d8e318ed",
            "fullname": "bijal malvi",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 32,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 31,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 30,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 29,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 4,
            "status": "Completed"
          },
          {
            "id": "b6f0e59c-3b4a-4d92-9bda-e715d8e318ed",
            "fullname": "bijal malvi",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 28,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 27,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 26,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 25,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 3,
        "status": "Incomplete"
      },
      {
        "id": 24,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 23,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 3,
        "status": "Incomplete"
      },
      {
        "id": 22,
        "examDate": "2023-05-09T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 21,
        "examDate": "2023-05-09T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [
          {
            "id": "6ef9ccda-e614-48cd-a50b-8ba2ade38d46",
            "fullname": "saurin  jayswal",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 20,
        "examDate": "2023-05-09T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 19,
        "examDate": "2023-04-25T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 18,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [
          {
            "id": "0db220f7-b501-451f-b666-ff583ac529b3",
            "fullname": "local user",
            "statusId": 1,
            "status": "Pending"
          }
        ],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 17,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 16,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 15,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 14,
        "examDate": "2023-05-09T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 13,
        "examDate": "2023-05-15T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 12,
        "examDate": "2023-05-08T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 11,
        "examDate": "2023-05-05T14:03:02.477",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 10,
        "examDate": "2023-05-08T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 9,
        "examDate": "2023-05-10T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 8,
        "examDate": "2023-05-09T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 7,
        "examDate": "2023-05-09T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 6,
        "examDate": "2023-05-11T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 5,
        "examDate": "2023-05-04T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 3,
        "status": "Incomplete"
      },
      {
        "id": 4,
        "examDate": "2023-05-04T00:00:00",
        "presentCandidates": [],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 3,
        "examDate": "2023-05-02T00:00:00",
        "presentCandidates": [
          {
            "id": "97113a4a-745d-4a87-889a-8578a3c0e5aa",
            "fullname": "Harsh Patel",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 2,
        "examDate": "2023-05-02T00:00:00",
        "presentCandidates": [
          {
            "id": "97113a4a-745d-4a87-889a-8578a3c0e5aa",
            "fullname": "Harsh Patel",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      },
      {
        "id": 1,
        "examDate": "2023-05-02T00:00:00",
        "presentCandidates": [
          {
            "id": "0b724567-7e36-4036-a957-67447f0c2a62",
            "fullname": "Fourth User",
            "statusId": 4,
            "status": "Completed"
          },
          {
            "id": "0db220f7-b501-451f-b666-ff583ac529b3",
            "fullname": "local user",
            "statusId": 4,
            "status": "Completed"
          }
        ],
        "absentCandidates": [],
        "statusId": 1,
        "status": "Pending"
      }
    ],
    "message": "Schedules fetched successfully",
    "exceptionMessage": ""
  };

  getResponseData() {
    return this.responseData.response;
  }
  
}
