import { Component } from '@angular/core';
import * as BlinkID from '@microblink/blinkid-capacitor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  plugin: any;

  constructor() {
    this.plugin = new BlinkID.BlinkIDPlugin();
  }

  async ejemplo() {
    const plugin = new BlinkID.BlinkIDPlugin();
    const blinkIdCombinedRecognizer = new BlinkID.BlinkIdCombinedRecognizer();
    blinkIdCombinedRecognizer.returnFullDocumentImage = true;
    blinkIdCombinedRecognizer.returnFaceImage = true;
    const licenseKeys: BlinkID.License = {
      // eslint-disable-next-line max-len
      ios: 'sRwAAAATY29tLmNvb3BtaW51dG8ucHJ1YizLktQ/n1OdMetGqAwb51iVwHaFAH6agzVehN2DG469aEcyzGAzlFzw7Ikr++47olG4pKon6WhSx4d8GrRsqTzCGck4rDwqA3vvYdpchd27RJafMXRiMybrP/kBGQ3Fi6nJApm0hEPrPPxhR+rlWj+Yp/RdjjERWny1FDPEqCP5ts6sZvkbEKfNSsib7IjMOLpVgKmbEYUF5LoQqWplV8t9GvgJUCise65IaHsy7HHH',
      // eslint-disable-next-line max-len
      android: 'sRwAAAATY29tLmNvb3BtaW51dG8ucHJ1YizLktQ/n1OdMetGqAwb51iVwHaFAH6agzVehN2DG469aEcyzGAzlFzw7Ikr++47olG4pKon6WhSx4d8GrRsqTzCGck4rDwqA3vvYdpchd27RJafMXRiMybrP/kBGQ3Fi6nJApm0hEPrPPxhR+rlWj+Yp/RdjjERWny1FDPEqCP5ts6sZvkbEKfNSsib7IjMOLpVgKmbEYUF5LoQqWplV8t9GvgJUCise65IaHsy7HHH',
      showTrialLicenseWarning: true
    };
    // Perform scan and gather results
    const scanningResults = await plugin.scanWithCamera(
      new BlinkID.BlinkIdOverlaySettings(),
      new BlinkID.RecognizerCollection([blinkIdCombinedRecognizer]),
      licenseKeys
    );
  }
}
