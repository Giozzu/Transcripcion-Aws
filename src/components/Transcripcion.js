import '../styles/transcripcion.css'
import { ConnectContactLensClient, ListRealtimeContactAnalysisSegmentsCommand } from "@aws-sdk/client-connect-contact-lens"; // ES Modules import
import { AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY_ID} from '../config';
// import { ConnectClient, AssociateApprovedOriginCommand } from "@aws-sdk/client-connect"; // ES Modules import
import {Typewriter, Cursor} from 'react-simple-typewriter';
import {useCallback, useEffect, useState } from "react";

// Datos temporales

// const data = {
  
//     "Segments": [
//         {
//             "Transcript": {
//                 "Id": "151fdea7-60ac-4136-8d76-3dc29b3c2ecd",
//                 "ParticipantId": "AGENT",
//                 "ParticipantRole": "AGENT",
//                 "Content": "Bueno.",
//                 "BeginOffsetMillis": 757,
//                 "EndOffsetMillis": 1275,
//                 "Sentiment": "NEUTRAL"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "64038535-f936-4546-9108-0a8fb820602c",
//                 "ParticipantId": "CUSTOMER",
//                 "ParticipantRole": "CUSTOMER",
//                 "Content": "Bueno.",
//                 "BeginOffsetMillis": 867,
//                 "EndOffsetMillis": 1307,
//                 "Sentiment": "NEUTRAL"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "dbbff659-8c98-4cd4-85a0-a4c8f60d2d90",
//                 "ParticipantId": "AGENT",
//                 "ParticipantRole": "AGENT",
//                 "Content": "Hola. En quΘ le puedo ayudar?",
//                 "BeginOffsetMillis": 4880,
//                 "EndOffsetMillis": 6235,
//                 "Sentiment": "NEUTRAL"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "f06fac63-7f10-4ab5-8c95-3087e8830946",
//                 "ParticipantId": "CUSTOMER",
//                 "ParticipantRole": "CUSTOMER",
//                 "Content": "Hola. Necesito ayudar. Con una compra. Estoy muy bien o jado. Y de satisfecho. Mi sentimientos muy malo.",
//                 "BeginOffsetMillis": 10427,
//                 "EndOffsetMillis": 21095,
//                 "Sentiment": "POSITIVE"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "d13a14fa-9d80-48c7-86b9-69a20d6eab5f",
//                 "ParticipantId": "AGENT",
//                 "ParticipantRole": "AGENT",
//                 "Content": "Okay. Me puede dar especificaciones de su compra.",
//                 "BeginOffsetMillis": 24150,
//                 "EndOffsetMillis": 27925,
//                 "Sentiment": "POSITIVE"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "9a36a828-e92d-46ca-a46a-0b54fca11a23",
//                 "ParticipantId": "CUSTOMER",
//                 "ParticipantRole": "CUSTOMER",
//                 "Content": "Compre un producto. Y Estoy de satisfecho con este producto por la orden, la devoluci≤n",
//                 "BeginOffsetMillis": 31310,
//                 "EndOffsetMillis": 39355,
//                 "Sentiment": "POSITIVE"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "e3faee5b-65f0-47ce-bc63-ec223ab3c956",
//                 "ParticipantId": "AGENT",
//                 "ParticipantRole": "AGENT",
//                 "Content": "Okay. Te darΘ esto. Devoluci≤n. Cußl es su nombre completo?",
//                 "BeginOffsetMillis": 42240,
//                 "EndOffsetMillis": 45852,
//                 "Sentiment": "NEUTRAL"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "624cecfe-52f7-4577-9d15-410a9840ecda",
//                 "ParticipantId": "CUSTOMER",
//                 "ParticipantRole": "CUSTOMER",
//                 "Content": "Mi nombre completo es Gustavo TΘllez. Por favor, denme de vuelos. Si ah!",
//                 "BeginOffsetMillis": 49587,
//                 "EndOffsetMillis": 54267,
//                 "Sentiment": "NEUTRAL"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "57e5499d-887e-43ad-a2d6-47d7fc779fdf",
//                 "ParticipantId": "AGENT",
//                 "ParticipantRole": "AGENT",
//                 "Content": "Okay. Su devoluci≤n ha sido Realizada.",
//                 "BeginOffsetMillis": 60077,
//                 "EndOffsetMillis": 63345,
//                 "Sentiment": "NEGATIVE"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "458a7316-cd99-4bd0-955c-256442ff2ff6",
//                 "ParticipantId": "CUSTOMER",
//                 "ParticipantRole": "CUSTOMER",
//                 "Content": "Muchas gracias. Ahora estoy muy feliz. Estoy satisfecho. Se lo agradezco mucho.",
//                 "BeginOffsetMillis": 66250,
//                 "EndOffsetMillis": 73625,
//                 "Sentiment": "POSITIVE"
//             }
//         },
//         {
//             "Transcript": {
//                 "Id": "538f11be-7965-4b48-8d1c-b38d4bd4d5b5",
//                 "ParticipantId": "AGENT",
//                 "ParticipantRole": "AGENT",
//                 "Content": "Adi≤s.",
//                 "BeginOffsetMillis": 77547,
//                 "EndOffsetMillis": 78125,
//                 "Sentiment": "POSITIVE"
//             }
//         }
//     ]

// };



// const descargar = useCallback(async () => {
//   try {
//     const response = await fetch(url);
//     const data  = await response.json();
    
//     const arrNuevo = data.map((usuario) => {
//       const tareaNueva = {
//         id: uuidv4(),
//         descripcion: usuario.title,
//         completada: usuario.completed,
//       };
//       return tareaNueva;
//     });
//     setArrTareas(arrNuevo);
//   } catch (error) {
//     console.error('Error al descargar los datos:', error);
//   }
// }, [url, setArrTareas]);

// useEffect(() => {
//   descargar();
// }, [descargar]);

const Transcripcion = ({text}) => {
    //Permitir obtener datos de Amazon
    
    


    async function fetchContactAnalysis() {
      try {
        const { ConnectClient, AssociateApprovedOriginCommand } = require("@aws-sdk/client-connect"); // CommonJS import
        const connectclient = new ConnectClient(config);
        const connectinput = { // AssociateApprovedOriginRequest
        InstanceId: "STRING_VALUE", // required
        Origin: "STRING_VALUE", // required
        };
        const command = new AssociateApprovedOriginCommand(connectinput);
        const response = await connectclient.send(command);
      } catch (error) {
          console.error(error);
      }
    }
    fetchContactAnalysis();
    

//Obtener datos de Amazon

const config = {
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID, // Reemplaza con tu Access Key ID // Reemplaza con tu Secret Access Key
    secretAccessKey: AWS_SECRET_ACCESS_KEY_ID // Reemplaza con tu Secret Access Key
  },
};

const client = new ConnectContactLensClient(config);

const input = { // ListRealtimeContactAnalysisSegmentsRequest
    InstanceId: "e730139b-8673-445e-8307-c3a9250199a2", // required
    ContactId: "972e7a78-4e8e-4741-b92a-ee7c1816b602", // required
};

async function fetchContactAnalysisLens() {
  try {
      const command = new ListRealtimeContactAnalysisSegmentsCommand(input);
      const response = await client.send(command);
      console.log(response); // successful response
  } catch (error) {
      console.error(error);
  }
}
fetchContactAnalysisLens();
  // useEffect(() => {
  //   fetchContactAnalysis();
  // }, [fetchContactAnalysis]);

  
    return(
        <h1 className="ventana-transcripcion">
        <span style={{fontWeight: 'bold', color: 'green'}}>
            <Typewriter 
            words={['Esta es una prueba para ver que tan largo puede llegar a ser un texto y como se ve, hola cambio de prueba']}
            loop={false}
            deleteSpeed={100000000000000000}
            typeSpeed={50}
            delaySpeed={2000}
            />
        </span>
        <Cursor />
        </h1>
  )
  
}

export default Transcripcion;