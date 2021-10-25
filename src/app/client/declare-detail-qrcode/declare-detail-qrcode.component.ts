import {Component, OnDestroy, OnInit, VERSION} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from 'ngx-qrcode2';
import {DeclareRequest} from '../../shared/model/request/declareRequest';

@Component({
  selector: 'app-declare-detail-qrcode',
  templateUrl: './declare-detail-qrcode.component.html',
  styleUrls: ['./declare-detail-qrcode.component.scss']
})
export class DeclareDetailQrcodeComponent implements OnInit, OnDestroy {
  elementType: string;
  name = 'Angular ' + VERSION.major;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value: string;

  declareDetail: DeclareRequest;

  constructor(private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.elementType = NgxQrcodeElementTypes.CANVAS;
    this.declareDetail = this.localStorage.retrieve('declare-detail-qrcode');
    this.value = this.qrText(this.declareDetail);
  }

  ngOnDestroy(): void {
    this.localStorage.clear('declare-detail-qrcode');
  }

  qrText(declareDetail: DeclareRequest): string {
    return `-Họ tên : ${declareDetail.name},
     -Ngày sinh : ${declareDetail.birthDay},
     -Giới tính: ${declareDetail.birthDay ? 'Nam' : 'Nữ'},
     -CMT/CCCD : ${declareDetail.cmt},
     -Địa chỉ: ${declareDetail.address}, ${declareDetail.communeName},${declareDetail.districtName},${declareDetail.provinceName},
      *** Trong vòng 14 ngày:
       ${declareDetail.exposureToF0 ? ' -Có tiếp xúc với trường hợp bệnh hoặc nghi ngờ mắc bệnh COVID - 19' : ''}
       ${declareDetail.comeBackFromEpidemicArea ? '-Có đi về từ vùng có dịch COVID-19' : ''}
       ${declareDetail.contactWithPeopleReturningFromEpidemicAreas ? '-Có tiếp xúc với trường hợp đi về từ vùng dịch' : ''}
      *** Triệu chứng trong vòng 14 ngày:
      ${declareDetail.fever ? '-Sốt' : ''}
      ${declareDetail.cough ? '-Ho' : ''}
      ${declareDetail.shortnessOfBreath ? '-Khó thở' : ''}
      ${declareDetail.pneumonia ? ' -Viêm phổi' : ''}
      ${declareDetail.soreThroat ? '-Đau họng' : ''}
      ${declareDetail.tired ? '-Mệt mỏi' : ''}
     *** Hiện tại đang bị bệnh:
     ${declareDetail.chronicLiverDisease ? '-Bệnh gan mãn tính' : ''}
     ${declareDetail.chronicBloodDisease ? ' -Bệnh máu mãn tính' : ''}
     ${declareDetail.chronicLungDisease ? '-Bệnh phổi mãn tính' : ''}
     ${declareDetail.chronicKideyDisease ? '-Bệnh thận mãn tính' : ''}
     ${declareDetail.heartRelatedDiseaes ? '-Bệnh tim mạch' : ''}
     ${declareDetail.highBloodPressure ? ' -Huyết áp cao' : ''}
     ${declareDetail.hivOrImmunocompromised ? '-HIV hoặc suy giảm miễn dịch' : ''}
     ${declareDetail.organTransplantRecipient ? ' -Người nhận ghép tạng, tủy xương:' : ''}
     ${declareDetail.diabetes ? ' -Tiểu đường' : ''}
     ${declareDetail.cancer ? ' -Ung thư' : ''}
     ${declareDetail.pregnant ? '-Có thai' : ''}`;
  }

}

