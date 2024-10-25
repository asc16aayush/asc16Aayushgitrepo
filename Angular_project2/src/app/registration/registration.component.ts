import { Component } from '@angular/core';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{


  formData: any = {
    name: '',
    password: '',
    beverage: { tea: false, coffee: false },
    address: '',
    gender: '',
    meal: '',
    feedback: 5
  };

  // Stored form data
  storedData: any = null;

  // Video embed HTML
  videoEmbed: string = '';

  // On component load
  ngOnInit() {
    this.loadData();
  }

  // Update the feedback value
  updateFeedbackValue(event: any) {
    this.formData.feedback = event.target.value;
  }

  // Update table dynamically as you type
  updateTable() {
    this.storedData = { ...this.formData };
  }



  getBeverage(beverage: { tea: boolean, coffee: boolean }): string {
    const selectedBeverages = [];
    if (beverage.tea) {
      selectedBeverages.push('Tea');
    }
    if (beverage.coffee) {
      selectedBeverages.push('Coffee');
    }
    return selectedBeverages.length > 0 ? selectedBeverages.join(', ') : 'None';
  }
  

  // Function to save form data to local storage
  storeData(event: Event) {
    event.preventDefault();

    // Store form data in local storage
    localStorage.setItem('formData', JSON.stringify(this.formData));
    alert('Data saved successfully!');

    // Clear form and reset feedback value
    this.formData = {
      name: '',
      password: '',
      beverage: { tea: false, coffee: false },
      address: '',
      gender: '',
      meal: '',
      feedback: 5
    };
    this.updateTable(); // Reset the table as well
  }

  // Load data from local storage
  loadData() {
    const stored = localStorage.getItem('formData');
    if (stored) {
      this.storedData = JSON.parse(stored);
    }
  }

  // Play video
  playVideo(type: string) {
    if (type === 'comedy') {
      this.videoEmbed = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/qhReqB3eLx0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (type === 'technical') {
      this.videoEmbed = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/fzWzPXEhPvA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if (type === 'chatgpt') {
      this.videoEmbed = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/3ao7Z8duDXc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
  }

}


