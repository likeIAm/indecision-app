import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = { 
      options: [],
      selectedOption: undefined
    }
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToDelete) => {
        this.setState((prevState => ({
            options: prevState.options.filter((option) => optionToDelete !== option)
        })));
    };
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({
        selectedOption: option
      }));
    };
    handleClearSelectedOption = () => {
      this.setState(() => ({
        selectedOption: undefined
      }))
    }
    handleAddOption = (option) => {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    componentDidMount() {
        console.log('Fetch data');
        try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
          if (options) {
              this.setState(() => ({ options}));
          }
        } catch (e) {
            // Do nothing, use the default options
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          console.log('Save data');
          const options = JSON.stringify(this.state.options);
          localStorage.setItem('options', options);
        }
    }
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className="widget">
              <Options
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption}
              />
            </div>
            <OptionModal 
              selectedOption={this.state.selectedOption}
              handleClearSelectedOption={this.handleClearSelectedOption}
            />
          </div>
        </div>
      );
    }
  }