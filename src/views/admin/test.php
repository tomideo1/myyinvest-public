<?= $this->extend('layout') ?>

<?= $this->section('main') ?>
<!-- Dynamic Table Full Pagination -->
<?php
$filter_success_counter     = 0;
$filter_pending_counter     = 0;
$filter_failed_counter      = 0;
$filter_charges_counter     = 0;
//Amount sections
$filter_charges_amount      = 0;
$filter_failed_amount       = 0;
$filter_pending_amount      = 0;
$filter_success_amount      = 0;

foreach ($allTransactions as $payment) {
    if ($payment->status == 'success') {
        $filter_success_counter++;
        $filter_success_amount += $payment->amount;
    }

    if ($payment->status == 'pending') {
        $filter_pending_counter++;
        $filter_pending_amount += $payment->amount;
    }

    if ($payment->status == 'failed') {
        $filter_failed_counter++;
        $filter_failed_amount += $payment->amount;
    }

    if ($payment->charges > 0) {
        $filter_charges_counter++;
        $filter_charges_amount += $payment->charges;
    }
}
?>

<!-- END Hero -->
<div class="block block-rounded">
    <div class="block-header block-header-defaul">
        <h3 class="block-title">
        <form class="mb-1 form-inline" action="<?=base_url('transactions/deposit')?>" method="POST">
            <div class="row">
                <div class="col-md-5">
                    <label style="font-size: .9em;">From </label>
                    <input required type="datetime-local" class="ml-2 form-control mr-sm-2 mb-sm-0" id="example-if-email" name="from_date">
                </div>
                <div class="col-md-5">
                    <label style="font-size: .9em; margin-left: 5e;">To </label>
                    <input required type="datetime-local" placeholder="To" class="ml-2 form-control mr-sm-2 mb-sm-0" id="example-if-password" name="to_date">
                </div>
                <div class="col-md-2">
                    <button type="submit" style="margin-top: 2em;" class="btn-block btn btn-rounded btn-primary btn-sm">Search</button>
                </div>
            </div>
        </form>
        </h3>
        <!-- <div class="dropdown d-inline-block">
            <button type="button" class="btn btn-sm btn-alt-primary" id="dropdown-recent-orders-filters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-fw fa-flask"></i>
                Filters
                <i class="ml-1 fa fa-angle-down"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-md dropdown-menu-right font-size-sm" aria-labelledby="dropdown-recent-orders-filters">
                <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" href="<?= base_url('transactions/deposit?status=all') ?>">
                    All
                    <span class="badge badge-primary badge-pill"><?= count($allTransactions); ?></span>
                </a>
                <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" href="<?= base_url('transactions/deposit?status=success') ?>">
                    Success
                    <span class="badge badge-primary badge-pill"><?= $filter_success_counter; ?></span>
                </a>
                <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" href="<?= base_url('transactions/deposit?status=pending') ?>">
                    Pending
                    <span class="badge badge-primary badge-pill"><?= $filter_pending_counter ?></span>
                </a>
                <a class="dropdown-item font-w500 d-flex align-items-center justify-content-between" href="<?= base_url('transactions/deposit?status=failed') ?>">
                    Failed
                    <span class="badge badge-primary badge-pill"><?= $filter_failed_counter ?></span>
                </a>
            </div>
        </div> -->

    </div>



    <div class="block-content block-content-full" style="margin-top: -1.4em;">
        <?php  if (isset($transactionsData) && count($transactionsData) > 0) { ?>
            <div style="margin-bottom: 20px; text-align: center">
                <strong class="mb-2 text-center text-primary">Found <?= count($transactionsData); ?> Deposit report From <?=$from?> to <?=$to?></strong>
            </div>
        <?php } ?>

        <div class="row row-deck">


            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow" href="<?= base_url('transactions/deposit?status=success') ?>">
                    <div class="bg-success block-content block-content-full d-fle align-items-center justify-content-betweer">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Successful</div>
                            <div class="font-size-sm"><?= $filter_success_counter ?></div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow" href="<?= base_url('transactions/deposit?status=pending') ?>">
                    <div class="bg-warning block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Pending</div>
                            <div class="font-size-sm"><?= $filter_pending_counter ?></div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow" href="<?= base_url('transactions/deposit?status=failed') ?>">
                    <div class="bg-danger block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Failed</div>
                            <div class="font-size-sm"><?= $filter_failed_counter ?></div>
                        </div>
                    </div>
                </a>
            </div>


            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow">
                    <div class="bg-primary block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Charges</div>
                            <div class="font-size-sm"><?= $filter_charges_counter ?></div>
                        </div>
                    </div>
                </a>
            </div>




            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow">
                    <div class="bg-success block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Successful (Amount)</div>
                            <div class="font-size-sm"><?= currency($filter_success_amount) ?></div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow">
                    <div class="bg-warning block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Pending (Amount)</div>
                            <div class="font-size-sm"><?= currency($filter_pending_amount) ?></div>
                        </div>
                    </div>
                </a>
            </div>

            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow">
                    <div class="bg-danger block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Failed (Amount)</div>
                            <div class="font-size-sm"><?= currency($filter_failed_amount) ?></div>
                        </div>
                    </div>
                </a>
            </div>


            <div class="text-center col-md-3" style="height: 90px;">
                <a class="block block-rounded block-bordered block-link-shadow">
                    <div class="bg-primary block-content block-content-full d-fle align-items-center justify-content-between">
                        <div style="margin-top: -1em !important;" class="text-white">
                            <div class="mb-1 font-w600" style="font-size: .9em !important;">Charges (Amount)</div>
                            <div class="font-size-sm"><?= currency($filter_charges_amount) ?></div>
                        </div>
                    </div>
                </a>
            </div>




        </div>


        <table class="table table-responsive table-bordered table-striped table-vcenter js-dataTable-buttons">
            <thead>
                <tr style="width: 100%; text-align:left;">
                    <th style="width:8%; font-size: .6em !important;">Dates</th>
                    <th style="width:6%; font-size: .6em !important;">Time</th>
                    <th style="width:10% !important; font-size: .6em !important;">Name</th>
                    <th style="width:10% !important; font-size: .6em !important;">Current Balance (₦)</th>
                    <th style="width:4% ;font-size: .6em !important;">Acc Number</th>
                    <th style="width:3%; font-size: .6em !important;">Bank</th>
                    <th style="width:7%; font-size: .6em !important;">Sender's Bank</th>
                    <th style="width:7%; font-size: .6em !important;">Sender's Name</th>
                    <th style="width:4%; font-size: .6em !important;">Amount (₦)</th>
                    <th style="width:3%; font-size: .6em !important;">Channels</th>
                    <th style="width:3%; font-size: .6em !important;">Charges</th>
                    <th style="width:3%; font-size: .6em !important;">Response</th>
                    <th style="width:7%; font-size: .6em !important;">Status</th>
                    <th style="width:7%; font-size: .6em !important;">Reference</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $i = 1;
                if (count($transactions) > 0) {  ?>

                    <?php foreach ($transactions as $transaction) {  ?>
                        <tr style="font-size: .8em !important;">
                            <td>
                                <span><?php echo date('d M Y', strtotime($transaction->today)); ?></span>
                            </td>

                            <td class="text-muted font-size-s">
                                <?= date('h:i:s a', strtotime($transaction->created_at)) ?>
                            </td>
                            <td class="font-w600 font-size-s">
                                <?php
                                $lowercase = strtolower($userModel->findUser($transaction->user_id)->first_name) . ' ';
                                $lowercase .= strtolower($userModel->findUser($transaction->user_id)->last_name);

                                ?>
                                <a style="text-transform:capitalize !important;" href="<?= base_url("users/info?customer_id=$transaction->user_id") ?>">
                                    <?= ucfirst($lowercase); ?>
                                </a>
                            </td>

                            <td class="text-muted d-sm-tablecel" style="font-size: .8em !important;">
                                <?= number_format($transaction->current_balance) ?>
                            </td>
                            <td class="text-muted d-sm-tablecel" style="font-size: .8em !important;">
                                <?= ($userModel->AccountInfo($transaction->user_id)[0]->account_number) ?>
                            </td>
                            <td class="d-sm-table-cell font-size-sm" style="font-size: .8em !important;">
                                <?= str_replace('bank', '', $userModel->AccountInfo($transaction->user_id)->bank_name) ?>
                            </td>
                            <td class="d-sm-table-cell font-size-sm" style="font-size: .8em !important;">
                                <?= $transaction->bank_name; ?>
                            </td>
                            <td class="d-sm-table-cell font-size-sm" style="font-size: .8em !important;">
                                <?php
                                $lowercase = strtolower($transaction->sender_name) . ' ';

                                ?>
                                    <span style="text-transform:capitalize"><?= ($lowercase); ?></span>
                            </td>
                            <td class=" d-sm-table-cell font-size-sm" style="font-size: .8em !important;">
                                <?= number_format($transaction->amount) ?>
                            </td>

                            <td class=" d-sm-table-cell font-size-sm" style="font-size: .8em !important;">
                                <?=
                                str_starts_with($transaction->reference, 'MNFY') ? 'Transfer' : 'Card';
                                ?>
                            </td>

                            <td class=" d-sm-table-cell font-size-sm" style="font-size: .8em !important;">
                                <?= number_format($transaction->charges) ?>
                            </td>

                            <td></td>

                            <td class=" d-sm-table-cell">
                                <?php if ($transaction->status == PENDING) {  ?>
                                    <span class="badge badge-warning"><?= ucfirst($transaction->status) ?></span>
                                <?php }  ?>

                                <?php if ($transaction->status == SUCCESS) {  ?>
                                    <span class="badge badge-success"><?= ucfirst($transaction->status) ?></span>
                                <?php }  ?>

                                <?php if ($transaction->status == FAILED) {  ?>
                                    <span class="badge badge-danger"><?= ucfirst($transaction->status) ?></span>
                                <?php }  ?>
                            </td>

                            <td>
                                <span style="font-size: .8em !important" class="text-muted fontsize-sm"><?= $transaction->reference ?></span>
                            </td>

                        </tr>
                <?php }
                } ?>

            </tbody>
        </table>

    </div>
</div>
<!-- END Dynamic Table Full Pagination -->


<?= $this->endSection() ?>