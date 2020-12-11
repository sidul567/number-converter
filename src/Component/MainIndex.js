import React, { Component } from 'react';
import './reset.css'
import './style.css'
class MainIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
         decimal:0,
         octal:0,
         binary:0,
         hexadecimal:0,
         binaryarr:[],
         textArr:[],
         decimalArr:[],
         invalidBinary:false,
         checkValid:''
        };
        this.handleChangeDecimal = this.handleChangeDecimal.bind(this)
        this.handleChangeBinary = this.handleChangeBinary.bind(this)
        this.handleChangeOctal = this.handleChangeOctal.bind(this)
        this.handleChangeHexadecimal = this.handleChangeHexadecimal.bind(this)
        this.textToBinary = this.textToBinary.bind(this)
        this.binaryToText = this.binaryToText.bind(this)
        this.decimalToBinary = this.decimalToBinary.bind(this)
    }
    handleChangeDecimal(e){
       var value = e.target.value
       var decimal = parseInt(value) || 0
       var binary = decimal.toString(2)
       var octal = decimal.toString(8)
       var hexadecimal = decimal.toString(16)
       this.setState({decimal:decimal,octal:octal,binary:binary,hexadecimal:hexadecimal})
    }
 
    handleChangeBinary(e){
     var value = e.target.value
     var decimal = parseInt(value,2)||0
     var binary = decimal.toString(2)
     var octal = decimal.toString(8)
     var hexadecimal = decimal.toString(16)
     this.setState({decimal:decimal,octal:octal,binary:binary,hexadecimal:hexadecimal})
    }
 
    handleChangeOctal(e){
     var value = e.target.value
     var decimal = parseInt(value,8)||0
     var binary = decimal.toString(2)
     var octal = decimal.toString(8)
     var hexadecimal = decimal.toString(16)  
     this.setState({decimal:decimal,octal:octal,binary:binary,hexadecimal:hexadecimal})
    }
 
    handleChangeHexadecimal(e){
     var value = e.target.value
     var decimal = parseInt(value,16)||0
     var binary = decimal.toString(2)
     var octal = decimal.toString(8)
     var hexadecimal = decimal.toString(16)  
     this.setState({decimal:decimal,octal:octal,binary:binary,hexadecimal:hexadecimal})
    }

    Reset = ()=>{
        this.setState({binary:0,decimal:0,hexadecimal:0,octal:0})
    }

    textToBinary(text){
        const val = text.target.value;
        this.setState({textArr:val});
        const charCodeArray = [];
        for(let i in val){
            charCodeArray.push(val.charCodeAt(i))
        }
        var binaryArray = charCodeArray.map(char=>{
            return char.toString(2);
        })
        var decimalArray = charCodeArray.map(ch=>{
            return ch;
        })
        binaryArray = binaryArray.join(' ')
        decimalArray = decimalArray.join(' ')
        this.setState({binaryarr:binaryArray,decimalArr:decimalArray})
        return {binaryArray,decimalArray};
    }

    binaryToText(codeArray){
        const val = codeArray.target.value;
        this.setState({binaryarr:val});
        var text = "";
        var splitIt = val.split(' ');
        for(let i of splitIt){
            const ch = String.fromCharCode(parseInt(i,2));
            text = text.concat(ch);
            for(let j in val){
                if(val[j]!=1 && val[j]!=0 && val[j]!=' '){
                    console.log(val[j])
                    this.setState({checkValid:'Invalid Input'});
                }else{
                    this.setState({checkValid:''});
                }
            }
        }
        var decimalArray = splitIt.map(ch=>{
            return (parseInt(ch,2)||'');
        })
        decimalArray = decimalArray.join(' ');
        this.setState({textArr:text,decimalArr:decimalArray})
        return text;
    }

    decimalToBinary(codeArray){
        const val = codeArray.target.value;
        this.setState({decimalArr:val});
        var text = " "
        var splitIt = val.split(' ');
        for(let i of splitIt){
            var ch = String.fromCharCode(parseInt(i));
            if(ch<' ' && ch!='\n'){
                ch = '';
            }
            text = text.concat(ch);
            for(let j in splitIt){
                console.log(splitIt[j])
                if((splitIt[j]<32) && splitIt[j]!=32 && splitIt[i]!=' '){
                    console.log(val[j])
                    this.setState({checkValid:'Invalid Input'});
                    // this.setState({textArr:[]})

                }else{
                    this.setState({checkValid:''});
                }
            }
        }
        var binaryArray = splitIt.map(ch=>{
            var value = parseInt(ch)||'';
            var bin = value.toString(2);
            return bin;
        })
        binaryArray = binaryArray.join(' ')
        this.setState({textArr:text,binaryarr:binaryArray})
        return text;
    }

    ResetText = ()=>{
        this.setState({binaryarr:[],textArr:[],decimalArr:[]})
    }

    render() {
        return (
                <div className="container">
        {/* <!-- header section --> */}
        <header>
            <h1 id="title">Number Converter</h1>
        </header>
        {/* <!-- main section --> */}
        <main id="main">
            {/* <!-- number system --> */}
            <section id="number-system">
                <h2>Number System Conversations</h2>
                <div className="box">
                    <div className="input-group">
                        <label>Decimal</label>
                        <input type="text" placeholder="Input any decimal number , eg: 123456" value={this.state.decimal} onChange={this.handleChangeDecimal}/>
                    </div>
                    <div className="input-group">
                        <label>Binary</label>
                        <input type="text" placeholder="Input any Binary number , eg: 101010" value={this.state.binary} onChange={this.handleChangeBinary}/>
                    </div>
                    <div className="input-group">
                        <label>Octal</label>
                        <input type="text" placeholder="Input any Octal number , eg: 765432" value={this.state.octal} onChange={this.handleChangeOctal}/>
                    </div>
                    <div className="input-group">
                        <label>Hexadecimal</label>
                        <input type="text" placeholder="Input any Hexadecimal number , eg: AB12CD" value={this.state.hexadecimal} onChange={this.handleChangeHexadecimal}/>
                    </div>
                    <div className="reset-button">
                        <button onClick={this.Reset}>Reset</button>
                    </div>
                    <div className="one-rem-space"></div>
                </div>
            </section>
            {/* <!-- text section --> */}
            <section id="text-conversion">
                <h2>Text Conversations</h2>
                <div className="box">
                    <div className="input-group">
                        <label>Enter your text below:</label>
                        <textarea name="text-decimal" id="" cols="30" rows="10" value={this.state.textArr} onChange={this.textToBinary}/>
                    </div>
                    <div className="half-rem-space"></div>
                    <div className="input-group">
                        <label>Enter your Decimal below:</label>
                        <textarea name="text-decimal" id="" cols="30" rows="10" value={this.state.decimalArr} onChange={this.decimalToBinary}/>
                    </div>
                    <div className="half-rem-space"></div>
                    <div className="input-group">
                        <label>Enter your Binary below:</label>
                        <textarea name="Binary-decimal" id="" cols="30" rows="10" value={this.state.binaryarr} onChange={this.binaryToText}/>
                    </div>
                    <div className="reset-button">
                        <p style={{color:"red"}}>{this.state.checkValid}</p>
                        <button onClick={this.ResetText}>Reset</button>
                    </div>
                    <div className="one-rem-space"></div>
                </div>
            </section>
        </main>
    </div>
        );
    }
}

export default MainIndex;