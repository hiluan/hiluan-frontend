import React, { useEffect } from "react";

const Typewriter = () => {
  useEffect(() => {
    const TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = "";
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    const elements = document.getElementsByClassName("typewrite");
    for (let i = 0; i < elements.length; i++) {
      const toRotate = elements[i].getAttribute("data-type");
      const period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }

    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".typewrite > .wrap { border-right: 0.08em solid rgba(255, 0, 100, 1)}";
    document.body.appendChild(css);
  }, []);

  return <></>;
};

export default Typewriter;
