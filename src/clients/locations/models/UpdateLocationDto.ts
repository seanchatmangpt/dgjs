/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MailgunSchema } from './MailgunSchema';
import type { ProspectInfoDto } from './ProspectInfoDto';
import type { SettingsSchema } from './SettingsSchema';
import type { SnapshotPutSchema } from './SnapshotPutSchema';
import type { SocialSchema } from './SocialSchema';
import type { TwilioSchema } from './TwilioSchema';
export type UpdateLocationDto = {
  /**
   * The name for the sub-account/location
   */
  name?: string;
  /**
   * The phone number of the business for which sub-account is created
   */
  phone?: string;
  /**
   * Company/Agency Id
   */
  companyId: string;
  /**
   * The address of the business for which sub-account is created
   */
  address?: string;
  /**
   * The city where the business is located for which sub-account is created
   */
  city?: string;
  /**
   * The state in which the business operates for which sub-account is created
   */
  state?: string;
  /**
   * The country in which the business is present for which sub-account is created
   */
  country?: UpdateLocationDto.country;
  /**
   * The postal code of the business for which sub-account is created
   */
  postalCode?: string;
  /**
   * The website of the business for which sub-account is created
   */
  website?: string;
  /**
   * The timezone of the business for which sub-account is created
   */
  timezone?: string;
  prospectInfo?: ProspectInfoDto;
  /**
   * The default settings for location
   */
  settings?: SettingsSchema;
  /**
   * The social media links for location
   */
  social?: SocialSchema;
  /**
   * The twilio credentials for location
   */
  twilio?: TwilioSchema;
  /**
   * The mailgun credentials for location
   */
  mailgun?: MailgunSchema;
  /**
   * The snapshot to be updated in the location.
   */
  snapshot?: SnapshotPutSchema;
};
export namespace UpdateLocationDto {
  /**
   * The country in which the business is present for which sub-account is created
   */
  export enum country {
    AF = 'AF',
    AX = 'AX',
    AL = 'AL',
    DZ = 'DZ',
    AS = 'AS',
    AD = 'AD',
    AO = 'AO',
    AI = 'AI',
    AQ = 'AQ',
    AG = 'AG',
    AR = 'AR',
    AM = 'AM',
    AW = 'AW',
    AU = 'AU',
    AT = 'AT',
    AZ = 'AZ',
    BS = 'BS',
    BH = 'BH',
    BD = 'BD',
    BB = 'BB',
    BY = 'BY',
    BE = 'BE',
    BZ = 'BZ',
    BJ = 'BJ',
    BM = 'BM',
    BT = 'BT',
    BO = 'BO',
    BA = 'BA',
    BW = 'BW',
    BV = 'BV',
    BR = 'BR',
    IO = 'IO',
    BN = 'BN',
    BG = 'BG',
    BF = 'BF',
    BI = 'BI',
    KH = 'KH',
    CM = 'CM',
    CA = 'CA',
    CV = 'CV',
    KY = 'KY',
    CF = 'CF',
    TD = 'TD',
    CL = 'CL',
    CN = 'CN',
    CX = 'CX',
    CC = 'CC',
    CO = 'CO',
    KM = 'KM',
    CG = 'CG',
    CD = 'CD',
    CK = 'CK',
    CR = 'CR',
    CI = 'CI',
    HR = 'HR',
    CU = 'CU',
    CY = 'CY',
    CZ = 'CZ',
    DK = 'DK',
    DJ = 'DJ',
    DM = 'DM',
    DO = 'DO',
    EC = 'EC',
    EG = 'EG',
    SV = 'SV',
    GQ = 'GQ',
    ER = 'ER',
    EE = 'EE',
    ET = 'ET',
    FK = 'FK',
    FO = 'FO',
    FJ = 'FJ',
    FI = 'FI',
    FR = 'FR',
    GF = 'GF',
    PF = 'PF',
    TF = 'TF',
    GA = 'GA',
    GM = 'GM',
    GE = 'GE',
    DE = 'DE',
    GH = 'GH',
    GI = 'GI',
    GR = 'GR',
    GL = 'GL',
    GD = 'GD',
    GP = 'GP',
    GU = 'GU',
    GT = 'GT',
    GG = 'GG',
    GN = 'GN',
    GW = 'GW',
    GY = 'GY',
    HT = 'HT',
    HM = 'HM',
    VA = 'VA',
    HN = 'HN',
    HK = 'HK',
    HU = 'HU',
    IS = 'IS',
    IN = 'IN',
    ID = 'ID',
    IR = 'IR',
    IQ = 'IQ',
    IE = 'IE',
    IM = 'IM',
    IL = 'IL',
    IT = 'IT',
    JM = 'JM',
    JP = 'JP',
    JE = 'JE',
    JO = 'JO',
    KZ = 'KZ',
    KE = 'KE',
    KI = 'KI',
    KP = 'KP',
    KR = 'KR',
    XK = 'XK',
    KW = 'KW',
    KG = 'KG',
    LA = 'LA',
    LV = 'LV',
    LB = 'LB',
    LS = 'LS',
    LR = 'LR',
    LY = 'LY',
    LI = 'LI',
    LT = 'LT',
    LU = 'LU',
    MO = 'MO',
    MK = 'MK',
    MG = 'MG',
    MW = 'MW',
    MY = 'MY',
    MV = 'MV',
    ML = 'ML',
    MT = 'MT',
    MH = 'MH',
    MQ = 'MQ',
    MR = 'MR',
    MU = 'MU',
    YT = 'YT',
    MX = 'MX',
    FM = 'FM',
    MD = 'MD',
    MC = 'MC',
    MN = 'MN',
    ME = 'ME',
    MS = 'MS',
    MA = 'MA',
    MZ = 'MZ',
    MM = 'MM',
    NA = 'NA',
    NR = 'NR',
    NP = 'NP',
    NL = 'NL',
    AN = 'AN',
    NC = 'NC',
    NZ = 'NZ',
    NI = 'NI',
    NE = 'NE',
    NG = 'NG',
    NU = 'NU',
    NF = 'NF',
    MP = 'MP',
    NO = 'NO',
    OM = 'OM',
    PK = 'PK',
    PW = 'PW',
    PS = 'PS',
    PA = 'PA',
    PG = 'PG',
    PY = 'PY',
    PE = 'PE',
    PH = 'PH',
    PN = 'PN',
    PL = 'PL',
    PT = 'PT',
    PR = 'PR',
    QA = 'QA',
    RE = 'RE',
    RO = 'RO',
    RU = 'RU',
    RW = 'RW',
    SH = 'SH',
    KN = 'KN',
    LC = 'LC',
    MF = 'MF',
    PM = 'PM',
    VC = 'VC',
    WS = 'WS',
    SM = 'SM',
    ST = 'ST',
    SA = 'SA',
    SN = 'SN',
    RS = 'RS',
    SC = 'SC',
    SL = 'SL',
    SG = 'SG',
    SX = 'SX',
    SK = 'SK',
    SI = 'SI',
    SB = 'SB',
    SO = 'SO',
    ZA = 'ZA',
    GS = 'GS',
    ES = 'ES',
    LK = 'LK',
    SD = 'SD',
    SR = 'SR',
    SJ = 'SJ',
    SZ = 'SZ',
    SE = 'SE',
    CH = 'CH',
    SY = 'SY',
    TW = 'TW',
    TJ = 'TJ',
    TZ = 'TZ',
    TH = 'TH',
    TL = 'TL',
    TG = 'TG',
    TK = 'TK',
    TO = 'TO',
    TT = 'TT',
    TN = 'TN',
    TR = 'TR',
    TM = 'TM',
    TC = 'TC',
    TV = 'TV',
    UG = 'UG',
    GB = 'GB',
    UA = 'UA',
    AE = 'AE',
    US = 'US',
    UM = 'UM',
    UY = 'UY',
    UZ = 'UZ',
    VU = 'VU',
    VE = 'VE',
    VN = 'VN',
    VG = 'VG',
    VI = 'VI',
    WF = 'WF',
    EH = 'EH',
    YE = 'YE',
    ZM = 'ZM',
    ZW = 'ZW',
  }
}

