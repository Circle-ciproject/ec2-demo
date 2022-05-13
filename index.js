
const http = require('http');
const https = require('https');
const fetch = require('node-fetch');
const {json, send} = require('micro');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer( async(req, res) => {
    // Set a response type of plain text for the response
    let body =  await json(req);
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    try {
        
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpa3JhbnQuYmFka2FzQGluZm9zeXMuY29tIiwiZXhwIjoxNjY3MDY4MjAwLCJpYXQiOjE2NTIyNTU1MjgsIm5hbWUiOiJMYW1iZGEtcGlwZWxpbmUtY3JlYXRpb24ifQ.l9AYqTTQ0GWE0XRp0j0XqejvAzA7MyWRIJW3YqJ8wsf3OYqR3-uDjgaOQQ-yskYwxsV5eR1uGLCY0OYTMWXGrQmGtcPB-MxD16UvQzA14VMlHdWgelAh0elBo1rK5xybk4w9JmYakV6mAEaB-B52fNNdAQJDJfrbuUOsXrUAI6k'
        };

        let url = `https://agtest.ad.infosys.com/portfoliosvc/portfolios/Sangeetha/applications/TestIDP/pipelines/Lambda-creation/create`;
		
		let data = {
            "applicationName": "TestIDP",
            "pipelineFlowType": "",
            "pipelines": [{
                "applicationName": "TestIDP",
                "name": "Lambda-creation4",
                "pipelineFlowType": "",
                "immutable": false,
                "stages": [{
                    "name": "git-terraform",
                    "stageID": "",
                    "steps": [{
                        "name": "gitscm",
                        "stepID": "",
                        "pluginName": "gitscm_0.0.1",
                        "pluginInput": {
                            "scmRepo": "Default",
                            "gitUrl": "adveegebeevedvde",
                            "username": "fegvbb",
                            "password": "edeeg",
                            "branchPattern": null,
                            "unsetProxy": null,
                            "folders": null,
                            "workitemPattern": null,
                            "branch": "$SOURCE_BRANCH"
                        },
                        "continueOnFailure": false,
                        "entryGateConfig": []
                    }],
                    "env": [],
                    "agent": "",
                    "alwaysExecute": false
                }],
                "portfolioName": "Sangeetha",
                "templateName": "",
                "templateVersion": "",
                "environments": [],
                "variables": []
            }],
            "username": "vikrant.badkas@infosys.com"
        };
        
        // const httpsAgent = new https.Agent({
        //     rejectUnauthorized: false,
        // });

        const result = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
            //agent: httpsAgent,
          });
        
        let result_data =  await result.json();;
        console.log('result---->', result_data);
        // Send back a response and end the connection

        const response = { result : 'Success', data: result_data };
        send(res, 200, response);
        
    } catch (err) {
        console.log(err);
        
    }
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');