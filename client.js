<script src="/socket.io/socket.io.js"></script>
    
        var socket = io.connect('http://localhost');

        function clickedOnDiv() {
            console.log("");
            navigator.clipboard.writeText(window.location.href);
            document.getElementById('linkStatus').innerText = "copied";
            setInterval(function() {
    
                document.getElementById('linkStatus').innerText = "click to copy link";
            }, 1000)
        };
    
        socket.on('valuesChangedrecvd', function(data) {
            console.log("recvd" + data.my)
            //  
            // if(document.getElementsByTagName("textarea")[0].value != data.my)
            //{
            console.log(window.location.href);
            console.log(data.url);
            if (window.location.href == data.url) {
                document.getElementsByTagName("textarea")[0].value = data.my;
            }
            //}
        });
    
    
    
        function broadcast() {
    
            console.log(document.getElementsByTagName("textarea")[0].value);
            socket.emit('valuesChangedsend', {
                my: document.getElementsByTagName("textarea")[0].value,
                url: window.location.href
            });
    
        } 
    
    