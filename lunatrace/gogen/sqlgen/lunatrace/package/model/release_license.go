//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package model

import (
	"github.com/google/uuid"
	"github.com/lunasec-io/lunasec/lunatrace/gogen/gql/types"
	"time"
)

type ReleaseLicense struct {
	ID           uuid.UUID `sql:"primary_key"`
	Source       types.LicenseSource
	ReleaseID    uuid.UUID
	ScanTime     time.Time
	LicenseID    uuid.UUID
	ScanMetadata *string
}
