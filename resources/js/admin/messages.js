const messages = {
    en: {
        sidebar_menu: {
            reserve: 'Reserve',
            recept: 'Reception',
            patient: 'Patient',
            accounting: 'Accounts',
            japanese: 'Japanese',
            english: 'English',
            log_out: 'Log out',
            change_language: 'Change language',
            preferences: 'Preferences'
        },
        main: {
            back_to_index: 'Back to main',
            acepted: 'Accepted',
            create_chart: 'Create chart',
            create_technical_instruction: 'Create technical instruction',
            history: 'History',
            edit: 'Edit',
            visiting_reception: 'Visiting reception',
            visiting_reception_comment: 'Tap to complete reception',
            patient_detais: 'Patient details',
            account_information: 'Accounting information',
            medical_chart_information: 'Medical chart information',
            show_all: 'Show all',
            responsible: 'Responsible',
            visit_date: 'Visit date',
            service_category: 'Service category',
            overall_service: 'Overall service',
            number_remaining_service: 'Number of remaining service',
            remaining_service_amount: 'Remaining service amount',
            basic_information: 'Basic information',
            patient_name: 'Patient name',
            romaji: 'Romaji',
            sex: 'Sex',
            reading: 'Reading',
            birthday: 'Birthday',
            contact_address_information: 'Contact/address information',
            street_address: 'Street address',
            phone_number: 'Phone number',
            mail_address: 'Mail address',
            profession: 'Profession',
            contact_information: 'Contact information',
            dentist: 'Dentist',
            conselor: 'Conselor',
            dental_hygienist: 'Dental hygienist',
            dental_assistant: 'Dental assistant',
            other_remarks: 'Other Remarks',
            service_management: 'Service management',
            no_patient_search: 'No patients with entered name was found.',
            system_error_occurred: 'System error occurred'
        },
        invoice: {
            invalid_type_of_value: 'Invalid type of value',
            blank_number: 'Blank number',
            no_payment_choice: 'No payment choice',
            none_for_0_yen: 'Please select "None" for 0 yen',
            exceeded_number_of_characters: 'Exceeded number of characters ',
            rest_service_less_than_0: 'Rest service less than 0',
            service_total_amount_blank: 'Please enter total service amount',
        },
        settings: {
            'tap_to_create_new': 'Tap to create new',
            'resend_email_success': 'Successful',
            'resend_email_failed': 'Failed',
            'resend_reset_password_success': 'Successful',
            'resend_reset_password_failed': 'Failed',
            'search_by_name_id': 'Search by name / ID',
            'maximum_reservation_day': 'Set the maximum reservation days between 10 and 365',
            'reservation_duplicate_time_zone': 'Duplicate time zone setting',
            'invalid_input': 'Invalid input',
            'invalid_input_2': 'Invalid input',
            'overlapped_block_time': 'The block frame is included in the specified time zone',
        },
        datetime: {
            year_month_day: 'YYYY-MM-DD',
            start_date: 'Start date',
            end_date: 'End date',
        },
        patient: {
            current_status_0: '-',
            current_status_1: 'Reserved',
            current_status_2: 'Checked In',
            current_status_3: 'Before Actuarial',
            current_status_4: 'Paid',
            'patient_name_required': 'Patient name is required',
            'patient_last_name_required': 'Last name is required',
            'patient_first_name_required': 'First name is required',
            'first_symptom': 'First symptom',
            zipcode_greater_than_7: 'Please enter 7-digit postal code',
            zipcode_invalid: 'Not a valid zip code'
        },
        medicalrecord: {
            staffs_column_requires_to_be_fully_filled: '"Staffs" column requires to be fully filled',
            sentence_on_main_conplaint_is_required: 'Sentence on "main conplaint" is required',
            you_must_enter_fees: 'You must enter fees',
            please_enter_of_all_treatments: 'Please enter of all treatments',
            you_enter_invalid_inputs: 'You enter invalid inputs',
        },
        page_title: {
            u1_1: 'Login',
            u1_2: 'Password Recovery',
            u1_3: 'Password Recovery',
            u1_4: 'Reset Password',
            u1_5: 'Reset Password',
            u1_6: 'User Registration',
            u2_1a: 'Reception - All',
            u2_1b: 'Reception - Reserved',
            u2_1c: 'Reception - Checked in',
            u2_1d: 'Reception - Before accounting',
            u2_1e: 'Reception - Paid',
            u7_1: 'Patients',
            u3_1: 'Patient Detail',
            u3_2: 'Patient Edit',
            u3_3: 'Patient History Detail',
            u3_4: 'Patient History',
            u3_5: 'Patient Registration',
            u4_1: 'Medical Record List',
            u4_2: 'Medical Record Detail',
            u4_3: 'Medical Record Registration',
            u4_5: 'Medical Record Edit',
            u4_6: 'Medical Record Edit History',
            u6_1: 'Patient Accounting',
            u6_2: 'Patient Accounting Edit',
            u6_3: 'Patient Accounting Detail',
            u8_1: 'Accounting',
            s2_1: 'Setting - Accounts',
            s3_1: 'Setting - Treatments',
            s3_3: 'Setting - Services',
        },
        login_page: {
            input_characters: 'Using half-width English more than 8 characters numbers and letters',
            forgot_pass: 'Forgot Password?',
        },
        forgot_password: {
            text_1: 'We will send you a password reset email',
            text_2: 'Please input your registered email address',
            btn_send: 'Send email'
        },
        reset_password_complete: {
            text: 'Your password has been reset successfully',
        },
        common_page: {
            email: 'Email',
            password: 'Password',
            confirm_password: 'Re-typing password',
            input_characters: 'Using half-width English more than 8 characters numbers and letters',
            btn_login: 'Log In',
            chart_info: 'Medical chart information',
        },
        email_forgot_password: {
            text_1: 'We have sent a password reset link',
            text_2: 'Please check your email',
        },
        register_page: {
            company_name: 'NEOLAB Inc.',
            account_name: 'Account name',
            btn_check_text_terms: 'I agree with Terms of Services & Privacy Policy',
            btn_add: 'Add account',
        },
        reception_page: {
            recept: 'Reception',
            register_patient: 'Patient registration',
            show_all: 'All display',
            before_visit: 'Before visit',
            accepted: 'Accepted',
            before_accounting: 'Before accounting',
            accounted_patient: 'Accepted accounting',
            accepted_1: 'Accepted',
            date_text: 'Select display period',
            date_start: 'Start date',
            btn_save: 'Save',
            btn_reset: 'Reset',
            date_year: 'Year',
            date_month: 'Month',
            date_day: 'Day',
            influencer: 'Influencer',
            recept_time: 'Reception time',
            billing_amount: 'Billed this time',
        },
        patient_page: {
            back_to_list: 'Back to list',
            btn_create_chart: 'Add record',
            patient_info: 'Patient information',
            accounting_info: 'Accounts information',
            basic_info: 'Basic information',
            name: 'Name',
            romaji: 'Romaji',
            sex: 'Sex',
            furigana: 'Furigana',
            birthday: 'Birthday',
            contact_info: 'Contact / Street address',
            address: 'Address',
            phone_number: 'Phone',
            email: 'Email',
            assignee_info: 'Assignee information',
            other_notes: 'Other notes',
            influencer: 'Influencer',
            btn_history: 'History',
            btn_edit: 'Edit',
            edit_history: 'Editorial history',
            back_to_patient: 'Back to page',
            accept: 'Accepted',
            display: 'Display',
            tab_info: 'Tab information',
            required: 'required',
            last_name: 'Last name',
            first_name: 'First name',
            kata_last_name: 'Kata last name',
            kata_first_name: 'Kata first name',
            roma_last_name: 'Roma last name',
            roma_first_name: 'Roma first name',
            last_name2: '(lastname)',
            first_name2: '(firstname)',
            tap_select: 'Please select',
            man: 'Man',
            woman: 'Woman',
            tap_to_add_item: 'Tap to add item',
            btn_save: 'Save',
            patient_search: 'Search for patient',
            all: 'All',
            assignee: 'Assignee',
            recept_time: 'Reception time',
            back: 'Back',
            billing_amount: 'billing amount',
            amount_paid: 'amount paid',
            deduction_amount: 'deduction amount',
            amounted: 'amounted',
            before_accounting: 'before accounting',
            date_issue: 'Date of issue',
            payment_note: 'The following was received correctly',
            tax_included: 'Tax included',
            detail: 'Details',
            total: 'Total',
            yen: 'yen',
            more_than: 'More than',
            tech_instruction_creation: 'Technical instruction creation',
            tech_instruction: 'Technical instruction',
            visit_date: 'Visit date',
            content_treatment: 'Treatment details',
            display_record: 'View record',

            complete_accounting: 'Complete accounting',
            tap_to_complete_accounting: 'Tap to complete accounting',
            receipt_printing: 'Receipt printing',
            color_setting: 'Color setting',
            zip_code: 'Zip code',
            btn_zip_code: 'Address Search',
        },
        error_page: {
            error: 'The page can not be found.',
        },
        setting_page: {
            setting: 'Settings',
            account_setting: 'Account settings',
            master_setting: 'Master settings',
            treatment_detail: 'Treatment details',
            service_management: 'Services management',
            invite: 'Invitation',
            add_member: 'Add member',
            send_invite: 'Send an invitation email',
            select_role: 'Please select a role',
            role_admin: 'Admin',
            role_view_only: 'View only',
            invite_date: 'Invitation date',
            possible_login: 'Possible to login',
            last_login: 'Last logged in',
            normal: 'Normal',
            master_title: 'Master title',
            default_price: 'Default unit price',
            yen: 'yen'
        },
        accounting_list_page: {
            accounting: 'Accounts',
            select_date: 'Select date',
            download: 'Download',
            payment_amount: 'Payment amount',
            accrued: 'Accrued accruals',
            total_receiv: 'Total receivables',
            full_name: 'Full name',
            payment_type: 'Payment type',
            yen: 'yen'
        },
        medical_page: {
            back: 'Back',
            btn_create_chart: 'Add record',
            tech_instruction_creation: 'Technical instruction creation',
            patient_info: 'Patient information',
            accounting_info: 'Accounts information',
            tech_instruction: 'Technical instruction',
            visit_date: 'Visit date',
            display_for_printing: 'Display for printing',
            btn_history: 'History',
            btn_edit: 'Edit',
            person_in_charge: 'Person in charge',
            main_complaint: 'Main complaint',
            remarks_column: 'Remarks column',
            treatment_detail: 'Treatment details',
            yen: 'yen',
            total: 'Total',
            back_to_list: 'Back to list',
            tap_to_add_item: 'Tap to add item',
            memo: 'Note',
            btn_register: 'Register',
            btn_save_draft: 'Save draft',
            accepted: 'Accepted',
            back_to_latest: 'Back to lastest record',
            edit_history: 'Editorial history',
            btn_display: 'Display',
            chart_print: 'Print',
        },
        component: {
            hp_responsible: 'Person in charge',
            hp_visit_date: 'Visit date',
            hp_first_medical: 'First medical consultation',
            service_category: 'Service category',
            overall_service: 'Overall service',
            number_remaining: 'Number of remaining services',
            remaining_amount: 'Remaining service amount',
            yen: 'yen',
            dp_title: 'Select display period',
            dp_recent_specified: 'Recently specified',
            dp_specify_period: 'Specify period',
            dp_most_recent: 'Most recent from',
            dp_show_day: 'days',
            dp_start_date: 'Start date',
            dp_end_date: 'End date',
            dp_year: 'year',
            dp_month: 'month',
            dp_day: 'day',
            dp_btn_save: 'Save',
            dp_btn_reset: 'Reset',
            mrdl_patient_info: 'Medical chart information',
            mrdl_display_all: 'Display all',
            mrdl_draft: 'Draft',
        },
        accounting_page: {
            treatment_detail: 'Treatment details',
            service_category: 'Services category',
            overall_service: 'Overall services',
            number_added: 'Number added this time',
            provided: 'Provided this time',
            number_remaining: 'Number of remaining services',
            remaining_amount: 'Remaining service amount',
            yen: 'yen',
            previous_receivables: 'Previous receivables (overpayment)',
            billing_amount: 'Billing amount',
            sub_total: 'Sub total',
            discount_amount: 'Discount amount',
            deposit_amount: 'Deposit amount',
            unpaid_money: 'Unpaid money this time',
            remarks_column: 'Remarks column',
            service_management: 'Service management',
            payment_instrument: 'Payment instrument',
            payment_method: 'Please select a payment method',
            none: 'None',
            tap_to_add_item: 'Tap to add item',
        },
        placeholder: {
            patient_search: 'Search by Name / ID',
            input_text: 'Tap to input text',
            draw_illus: 'Tap to draw illustrations',
            enter_text: 'Input text',
            post_comment: 'Post a comment',
            tap_to_input: 'Tap to input',
            post_code: 'No hyphen is required',
        },
        accounting: {
            person_in_charge: 'Person in charge',
            payment_type: 'Payment Type',
            treatment_type: 'Treatment Type',
            tax_amount: 'Tax amount',
            payment_info: 'Payment information',
        },
        reservation: {
            reservation_canceled: 'Reservation canceled',
            reservation_created: 'Reservation created',
            reservation_updated: 'Reservation changed',
            reservations_already_exist: 'Reservations already exist',
            reservations_name_field_is_blanked: 'Name field is blanked',
            do_you_want_to_cancel_this_reservation: 'do you want to cancel this reservation',
            conflict_with_blocked_frame: 'Conflict with blocked frame',
            clinic_name: 'Clinic name',
            number_of_new_slots_reserved: 'Number of new slots reserved',
            number_of_existing_slots_reserved: 'Number of existing slots reserved',
            new_frame_reception: 'New frame reception',
            reservation_setting: 'Reservation setting',
            spreadsheet: 'Spreadsheet',
            number_of_reservations_by_type: 'Number of reservations by type',
            new_customer_reception_status: 'New customer reception status',
            frame_moved: 'The frame has been moved',
            added_frame: 'Added frame',
            deleted_frame: 'The frame has been deleted',
            presets_cannot_be_changed: 'Presets cannot be changed.',
            please_select_content: 'Please select content',
            preset_items_cannot_be_changed: 'Preset items cannot be changed'
        }
    },
    ja: {
        sidebar_menu: {
            reserve: '予約',
            recept: '受付',
            patient: '患者',
            accounting: '会計',
            japanese: '日本語',
            english: '英語',
            log_out: 'ログアウト',
            change_language: '表示言語の切り替え',
            preferences: '環境設定',
        },
        main: {
            back_to_index: '一覧に戻る',
            acepted: '受付済',
            create_chart: 'カルテ作成',
            create_technical_instruction: '技工指示書作成',
            history: '履歴',
            edit: '編集',
            visiting_reception: '来院受付',
            visiting_reception_comment: 'タップすると来院受付が完了します',
            patient_detais: '患者詳細',
            account_information: '会計情報',
            medical_chart_information: 'カルテ情報',
            show_all: 'すべて表示',
            responsible: '担当',
            visit_date: '来院日時',
            service_category: '役務カテゴリ',
            overall_service: '役務全体',
            number_remaining_service: '残役務数',
            remaining_service_amount: '残役務金額',
            basic_information: '基本情報',
            patient_name: '患者名',
            romaji: 'ローマ字',
            sex: '性別',
            reading: 'フリガナ',
            birthday: '生年月日',
            contact_address_information: '連絡先・住所情報',
            street_address: '住所',
            phone_number: 'お電話番号',
            mail_address: 'メールアドレス',
            profession: '職業',
            contact_information: '担当情報',
            dentist: '歯科医師',
            conselor: 'カウンセラー',
            dental_hygienist: '歯科衛生士',
            dental_assistant: '歯科助手',
            other_remarks: 'その他備考',
            service_management: '役務管理',
            no_patient_search: '入力された名前の患者が見つかりませんでした',
            system_error_occurred: 'システムエラーが発生しました'
        },
        invoice: {
            invalid_type_of_value: '不正な値が入力されています',
            blank_number: '数値を入力してください',
            no_payment_choice: '決済手段が選択されていません',
            none_for_0_yen: '0円の場合は「なし」を選択してください',
            exceeded_number_of_characters: '備考欄は1000文字以内で入力してください',
            rest_service_less_than_0: '残役務数は0未満にはなりません',
            service_total_amount_blank: '役務全体を入力してください',
        },
        settings: {
            'tap_to_create_new': 'タップで新規作成',
            'resend_email_success': 'メールを送信しました',
            'resend_email_failed': '失敗した',
            'resend_reset_password_success': '成功した',
            'resend_reset_password_failed': '失敗した',
            'search_by_name_id': '名前・IDで検索',
            'maximum_reservation_day': '最大予約日数は10〜365の間で設定してください',
            'reservation_duplicate_time_zone': '時間帯設定が重複しています',
            'invalid_input': '無効な入力です',
            'invalid_input_2': '不正な入力です',
            'overlapped_block_time': '指定の時間帯にブロック枠を含んでいます',
        },
        datetime: {
            year_month_day: 'YYYY年MM月DD日',
            start_date: '開始日',
            end_date: '終了日',
        },
        patient: {
            current_status_0: '-',
            current_status_1: '来院前',
            current_status_2: '受付済',
            current_status_3: '会計前',
            current_status_4: '会計済',
            'patient_name_required': '患者名は入力必須です',
            'patient_last_name_required': '患者名 (姓)は入力必須です',
            'patient_first_name_required': '患者名 (名)は入力必須です',
            'first_symptom': '初回主訴',
            zipcode_greater_than_7: '郵便番号は7桁で入力してください',
            zipcode_invalid: '有効な郵便番号ではありません'
        },
        medicalrecord: {
            staffs_column_requires_to_be_fully_filled: '担当者はすべて埋めてください',
            sentence_on_main_conplaint_is_required: '主訴-文章は入力必須です',
            you_must_enter_fees: '料金を入力してください',
            please_enter_of_all_treatments: '処置名を入力してください',
            you_enter_invalid_inputs: '不正な値が入力されています',
        },
        page_title: {
            u1_1: 'ログイン',
            u1_2: 'パスワードを忘れた',
            u1_3: '再設定メール送信完了',
            u1_4: 'パスワード再設定',
            u1_5: 'パスワード再設定完了',
            u1_6: 'ユーザー新規登録',
            u2_1a: '受付 - すべて',
            u2_1b: '受付 - 来院前',
            u2_1c: '受付 - 受付済み',
            u2_1d: '受付 - 会計前',
            u2_1e: '受付 - 会計済み',
            u7_1: '患者検索',
            u3_1: '患者詳細',
            u3_2: '患者詳細編集',
            u3_3: '患者詳細編集履歴閲覧',
            u3_4: '患者詳細編集履歴一覧',
            u3_5: '患者登録',
            u4_1: 'カルテ一覧',
            u4_2: 'カルテ(単一表示)',
            u4_3: 'カルテ新規登録',
            u4_5: 'カルテ編集',
            u4_6: 'カルテ編集履歴一覧',
            u6_1: '会計一覧',
            u6_2: '会計入力',
            u6_3: '会計済み',
            u8_1: '会計',
            s2_1: '設定 - アカウントリスト',
            s3_1: '設定 - 役務管理マスタ一覧',
            s3_3: '設定 - 処置内容マスタ一覧',
        },
        login_page: {
            input_characters: '半角英数字8文字以上',
            forgot_pass: 'パスワードを忘れた場合はこちら',
        },
        forgot_password: {
            text_1: 'パスワード再設定メールをお送りします',
            text_2: 'ご登録いただいたメールアドレスを入力ください',
            btn_send: '認証メールを送信する'
        },
        reset_password_complete: {
            text: 'パスワードの再設定が完了しました。',
        },
        common_page: {
            email: 'メールアドレス',
            password: 'パスワード',
            confirm_password: 'パスワード(再入力)',
            input_characters: '半角英数字8文字以上',
            btn_login: 'ログイン',
            chart_info: 'カルテ情報',
        },
        email_forgot_password: {
            text_1: 'パスワード再設定メールをお送りしました',
            text_2: 'メールボックスをご確認ください',
        },
        register_page: {
            company_name: '株式会社ネオラボ',
            account_name: 'アカウント名',
            btn_check_text_terms: '利用規約およびプライバシーポリシーに同意します',
            btn_add: 'アカウント作成',
        },
        reception_page: {
            recept: '受付',
            register_patient: '患者登録',
            show_all: 'すべて表示',
            before_visit: '来院前',
            accepted: '受付済み',
            before_accounting: '会計前',
            accounted_patient: '会計済み患者',
            accepted_1: '受付済',
            date_text: '表示期間を選択',
            date_start: '開始日',
            btn_save: '保存',
            btn_reset: 'リセット',
            date_year: '年',
            date_month: '月',
            date_day: '日',
            influencer: 'インフルエンサー',
            recept_time: '受付時刻',
            billing_amount: '今回請求額',
        },
        patient_page: {
            back_to_list: '一覧に戻る',
            btn_create_chart: 'カルテ作成',
            patient_info: '患者情報',
            accounting_info: '会計情報',
            basic_info: '基本情報',
            name: '患者名',
            romaji: 'ローマ字',
            sex: '性別',
            furigana: 'フリガナ',
            birthday: '生年月日',
            contact_info: '連絡先・住所情報',
            address: '住所',
            phone_number: 'お電話番号',
            email: 'メールアドレス',
            assignee_info: '担当情報',
            other_notes: 'その他備考',
            influencer: 'インフルエンサー',
            btn_history: '履歴',
            btn_edit: '編集',
            edit_history: '編集履歴',
            back_to_patient: '患者情報に戻る',
            accept: '受付済',
            display: '表示',
            tab_info: 'タグ情報',
            required: '必須',
            last_name: 'フリガナ姓',
            kata_last_name: 'フリガナ姓',
            kata_first_name: 'フリガナ名',
            roma_last_name: 'ローマ字姓',
            roma_first_name: 'ローマ字名',
            first_name: 'ローマ字姓',
            last_name2: '(姓)',
            first_name2: '(名)',
            tap_select: 'タップで選択',
            man: '男性',
            woman: '女性',
            tap_to_add_item: 'タップで項目追加',
            btn_save: '保存する',
            patient_search: '患者',
            all: 'すべて',
            assignee: '担当',
            recept_time: '受付時刻',
            back: '戻る',
            billing_amount: '請求額',
            amount_paid: '支払額',
            deduction_amount: '差引額',
            amounted: '会計済',
            before_accounting: '会計前',
            date_issue: '発行日',
            payment_note: '下記、正に領収いたしました',
            tax_included: '税込',
            detail: '明細',
            total: '計',
            yen: '円',
            more_than: '以上',
            tech_instruction_creation: '技工指示書作成',
            tech_instruction: '技工指示書',
            visit_date: '来院日時',
            content_treatment: '処置内容',
            display_record: 'カルテを表示',

            service_management: '役務管理',
            service_category: '役務カテゴリ',
            overall_service: '役務全体',

            complete_accounting: '会計完了',
            tap_to_complete_accounting: 'タップすると会計が完了します',
            receipt_printing: '領収書印刷',
            color_setting: '患者枠色設定',
            zip_code: '郵便番号',
            btn_zip_code: '住所検索',
        },
        error_page: {
            error: 'ページが見つかりません。',
        },
        setting_page: {
            setting: '設定',
            account_setting: 'アカウント設定',
            master_setting: 'マスタ設定',
            treatment_detail: '役務管理',
            service_management: '処置内容',
            invite: '招待済み',
            add_member: 'メンバーを追加',
            send_invite: '招待メール送信',
            select_role: '役割を選択ください',
            role_admin: '管理者',
            role_view_only: '閲覧のみ',
            invite_date: '招待メール送信日',
            possible_login: 'ログイン可能',
            last_login: '最終ログイン',
            normal: '通常',
            master_title: 'マスタ名称',
            default_price: 'デフォルト単価',
            yen: '円'
        },
        accounting_list_page: {
            accounting: '会計',
            select_date: '日付を選択',
            download: 'ダウンロード',
            payment_amount: '支払い金額',
            accrued: '発生未過収金',
            total_receiv: '未過収金合計',
            full_name: '氏名',
            payment_type: '支払種別',
            yen: '円'
        },
        medical_page: {
            back: '戻る',
            btn_create_chart: 'カルテ作成',
            tech_instruction_creation: '技工指示書作成',
            patient_info: '患者情報',
            accounting_info: '会計情報',
            tech_instruction: '技工指示書',
            visit_date: '来院日時',
            display_for_printing: '印刷用表示',
            btn_history: '履歴',
            btn_edit: '編集',
            person_in_charge: '担当者',
            main_complaint: '主訴',
            remarks_column: '備考欄',
            treatment_detail: '処置内容',
            yen: '円',
            total: '計',
            back_to_list: '一覧に戻る',
            tap_to_add_item: 'タップで項目追加',
            memo: 'メモ',
            btn_register: 'カルテ登録',
            btn_save_draft: '下書き保存',
            accepted: '受付済',
            back_to_latest: '最新のカルテに戻る',
            edit_history: '編集履歴',
            btn_display: '表示',
            chart_print: 'カルテ印刷',
        },
        component: {
            hp_responsible: '担当',
            hp_visit_date: '最終来院日',
            hp_first_medical: '初診主訴',
            service_category: '役務カテゴリ',
            overall_service: '役務全体',
            number_remaining: '残役務数',
            remaining_amount: '残役務金額',
            yen: '円',
            dp_title: '表示期間を選択',
            dp_recent_specified: '最近から指定',
            dp_specify_period: '期間を指定',
            dp_most_recent: '現在より直近',
            dp_show_day: '日を表示',
            dp_start_date: '開始日',
            dp_end_date: '終了日',
            dp_year: '年',
            dp_month: '月',
            dp_day: '日',
            dp_btn_save: '保存',
            dp_btn_reset: 'リセット',
            mrdl_patient_info: 'カルテ情報',
            mrdl_display_all: 'すべて表示',
            mrdl_draft: '下書き',
        },
        accounting_page: {
            treatment_detail: '処置内容',
            service_category: '役務カテゴリ',
            overall_service: '役務全体',
            number_added: '今回追加数',
            provided: '今回提供',
            number_remaining: '残役務数',
            remaining_amount: '残役務金額',
            yen: '円',
            previous_receivables: '前回未収金(過収金)',
            billing_amount: '請求額',
            sub_total: '小計',
            discount_amount: '割引額',
            deposit_amount: '入金額',
            unpaid_money: '今回未過収金',
            remarks_column: '備考欄',
            service_management: '役務管理',
            payment_instrument: '決済手段',
            payment_method: '決済手段を選択ください',
            none: 'なし',
            tap_to_add_item: 'タップで項目追加',
        },
        placeholder: {
            patient_search: '患者名・IDで検索',
            input_text: 'タップで文章入力',
            draw_illus: 'タップでイラストを描く',
            enter_text: 'テキストを入力',
            post_comment: 'コメントを投稿する',
            tap_to_input: 'タップで入力',
            post_code: 'ハイフンは不要です',
        },
        accounting: {
            person_in_charge: '担当者',
            payment_type: '支払い種別',
            treatment_type: '処置種別',
            tax_amount: '税額',
            payment_info: '支払情報',
        },
        reservation: {
            reservation_canceled: '予約を取り消しました',
            reservation_created: '予約を作成しました',
            reservation_updated: '予約内容を変更しました',
            reservations_already_exist: '予約が入っています',
            reservations_name_field_is_blanked: '枠名が空欄です',
            do_you_want_to_cancel_this_reservation: 'この予約を取り消しますか？',
            conflict_with_blocked_frame: 'ブロック枠と競合する',
            clinic_name: 'クリニック名',
            number_of_new_slots_reserved: '新規枠予約数',
            number_of_existing_slots_reserved: '既存枠予約数',
            new_frame_reception: '新規枠受付',
            reservation_setting: '予約設定',
            spreadsheet: '集計表',
            number_of_reservations_by_type: '種別毎予約数',
            new_customer_reception_status: '新規顧客受付状況',
            frame_moved: '枠を移動しました',
            added_frame: '枠を追加しました',
            deleted_frame: '枠を削除しました',
            presets_cannot_be_changed: 'プリセットのものは変更できません。',
            please_select_content: 'コンテンツを選択してください',
            preset_items_cannot_be_changed: 'プリセットの項目は変更できません'
        }
    }
};

export default messages;
