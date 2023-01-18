import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {


  saveItem() {
    Swal.fire({
      title: 'Enregistrement',
          text: "l'element a ete enregistre.",
          icon: 'success',
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false
    })
  }


}
