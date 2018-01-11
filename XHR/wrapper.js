var wrapper = new XMLHttpRequest();

        wrapper.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            }
          };
        wrapper.open('GET', "text.txt");
        wrapper.send();
    }