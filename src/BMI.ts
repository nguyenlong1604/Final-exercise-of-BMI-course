function calculateBMI() {
    let weight = parseFloat((<HTMLInputElement>document.getElementById('weight')).value);
    let height = parseFloat((<HTMLInputElement>document.getElementById('height')).value);
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        (<HTMLInputElement>document.getElementById('result')).innerHTML = "Vui lòng nhập các giá trị hợp lệ cho cân nặng và chiều cao.";
      return;
    }
  
    let bmi = weight / Math.pow(height / 100, 2);
    let result = "Chỉ số BMI của bạn là: " + bmi.toFixed(2);
  
    if (bmi < 16) {
      result += " (Bạn đang ở mức Gầy độ III)";
    } else if (bmi >= 16 && bmi < 17) {
      result += " (Bạn đang ở mức Gầy độ II)";
    } else if (bmi >= 17 && bmi < 18.5) {
      result += " (Bạn đang ở mức Gầy độ I)";
    } else if (bmi >= 18.5 && bmi < 25) {
      result += " (Bạn đang ở mức Bình thường)";
    } else if (bmi >= 25 && bmi < 30) {
      result += " (Bạn đang ở mức Thừa cân)";
    } else if (bmi >= 30 && bmi < 35) {
      result += " (Bạn đang ở mức Béo phì độ I)";
    } else if (bmi >= 35 && bmi < 40) {
      result += " (Bạn đang ở mức Béo phì độ II)";
    } else if (bmi >= 40) {
      result += " (Bạn đang ở mức Béo phì độ III)";
    }
  
  
    (<HTMLInputElement>document.getElementById('result')).innerHTML = result;
  }
  