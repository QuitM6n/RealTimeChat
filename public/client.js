let sock = new WebSocket('ws://localhost:8060');
            let text = document.getElementById('text');

            sock.onopen = () => {
                let name = document.getElementById('input_name_id');
                document.getElementById('connected_name').innerText = ":" + name.value
                console.log('Success connected');
            }

            sock.onmessage = function (event) {
                text.innerHTML += event.data + "<br>";
                console.log(event.data);
            }

            sock.onerror = function (error) {
                console.log("[ERROR descript: " + error + "]")
            }

            document.getElementById('send').onclick = function () {
                let text = document.getElementById('message');
                console.log(text.value);
                sock.send(text.value);
                text.value ="";
            };