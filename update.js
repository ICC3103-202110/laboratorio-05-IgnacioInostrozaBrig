function percentCalculator(billAmount,billPercent){
    return (billAmount*billPercent/100)
}

function totalMoney(billAmount,tip){
    return (parseInt(billAmount)+parseInt(tip))
}

function update(bill, percent, model){
    const {billAmount,billPercent,tip,totalbill} = model
    const newbillAmount = bill
    const newbillPercent = percent
    const tip2 = percentCalculator(newbillAmount,newbillPercent)
    const totalbill2 = totalMoney(newbillAmount,tip2)
    return {
        //Copies preview but updates changes
        ...model,
        billAmount: newbillAmount,
        billPercent: newbillPercent,
        tip: tip2,
        totalbill: totalbill2,
    }
}

module.exports = {
    update
}