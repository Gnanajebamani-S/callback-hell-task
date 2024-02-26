var div = document.createElement("div");
document.body.append(div);

setTimeout(function () {
  document.querySelector("div").innerHTML = `Counter: ${10}`;
  setTimeout(function () {
    document.querySelector("div").innerHTML = `Counter: ${9}`;
    setTimeout(function () {
      document.querySelector("div").innerHTML = `Counter: ${8}`;
      setTimeout(function () {
        document.querySelector("div").innerHTML = `Counter: ${7}`;
        setTimeout(function () {
          document.querySelector("div").innerHTML = `Counter: ${6}`;
          setTimeout(function () {
            document.querySelector("div").innerHTML = `Counter: ${5}`;
            setTimeout(function () {
              document.querySelector("div").innerHTML = `Counter: ${4}`;
              setTimeout(function () {
                document.querySelector("div").innerHTML = `Counter: ${3}`;
                setTimeout(function () {
                  document.querySelector("div").innerHTML = `Counter: ${2}`;
                  setTimeout(function () {
                    document.querySelector("div").innerHTML = `Counter: ${1}`;
                    setTimeout(function () {
                      document.querySelector(
                        "div"
                      ).innerHTML = `Happy Independence Day`;
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
