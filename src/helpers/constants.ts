export interface DodgeDataParsed {
    Projects: Projects;
}

export interface Projects {
    $:       Empty;
    Project: Project[];
}

export interface Empty {
    ExportReady: string;
    ExportDate:  ExportDate;
}

export enum ExportDate {
    The04232021 = "04/23/2021",
}

export interface Project {
    DRNumber:             string[];
    VersionNumber:        string[];
    DodgeReportType:      DodgeReportType[];
    ProjectURL:           string[];
    EmailAddress:         EmailAddress[];
    DateOfFirstExport:    ExportDate[];
    DateOfLastExport:     string[];
    DateOfCurrentExport:  ExportDate[];
    FirstIssueDate:       FirstIssueDateElement[];
    LastIssueDate:        FirstIssueDateElement[];
    ReportDate:           FirstIssueDateElement[];
    ProjectTitle:         string[];
    Lat:                  string[];
    Long:                 string[];
    Address:              string[];
    City:                 string[];
    State:                string[];
    County:               string[];
    Zip:                  string[];
    Country:              Country[];
    PrimaryStage:         PrimaryStage[];
    SecondaryStage:       SecondaryStage[];
    BidDate:              string[];
    SubmitBidsTo:         PlansAvailableFrom[];
    TargetStartDate:      TargetStartDate[];
    TargetCompletionDate: string[];
    ValuationEstLow:      string[];
    ValuationEstHigh:     string[];
    Valuation:            string[];
    MarketSegment:        string[];
    PrimaryProjectType:   string[];
    SecondaryProjectType: SecondaryProjectType[];
    SquareFootage:        string[];
    TypeOfWork:           TypeOfWork[];
    OwnershipType:        OwnershipType[];
    StatusText:           string[];
    ProjectNote:          string[];
    BidBond:              BidBond[];
    SpecialCode:          string[];
    PlansAvailableFrom:   PlansAvailableFrom[];
    ArchitecturalPlansBy: string[];
    StructuralPlansBy:    string[];
    PlansRemark:          string[];
    PlansLocation:        string[];
    PlanAvailable:        Available[];
    SpecAvailable:        Available[];
    DeliverySystem:       DeliverySystem[];
    FrameType:            string[];
    StoriesAbove:         string[];
    StoriesBelow:         string[];
    NoOfBuildings:        string[];
    StructuralInfo:       string[];
    FeaturesInfo:         string[];
    SpecAlerts:           string[];
    SearchNames:          SearchName[];
    Companies:            Company[];
}

export enum BidBond {
    Empty = "",
    The10 = "10%",
    The5 = "5%",
}

export interface Company {
    Company: { [key: string]: string[] }[];
}

export enum Country {
    Usa = "USA",
}

export enum DeliverySystem {
    ConstructionManagementAtRisk = "Construction Management at Risk",
    DesignBidBuild = "Design-Bid-Build",
}

export enum DodgeReportType {
    Project = "Project",
    ProjectITEM = "Project & ITEM",
}

export enum EmailAddress {
    IntmanArmstrongworldDodgepipelineCOM = "intman.armstrongworld@dodgepipeline.com",
}

export enum FirstIssueDateElement {
    The4202021 = "4/20/2021",
    The4212021 = "4/21/2021",
    The4222021 = "4/22/2021",
}

export enum OwnershipType {
    LocalGovernment = "Local Government",
    Private = "Private",
}

export enum Available {
    No = "No",
}

export enum PlansAvailableFrom {
    ConstructionManager = "Construction Manager",
    OwnerPrivate = "Owner (Private)",
    OwnerPublic = "Owner (Public)",
    Reprographer = "Reprographer",
}

export enum PrimaryStage {
    GCBidding = "GC Bidding",
    GCBiddingInvitation = "GC Bidding-Invitation",
    SubBidding = "Sub Bidding",
}

export enum SearchName {
    AddAltInt500K = "AddAltInt$500K",
    New500KAddAltInt500K = "New$500K, AddAltInt$500K",
}

export enum SecondaryProjectType {
    Empty = "",
    SupermarketConvenienceStore = "Supermarket/Convenience Store",
}

export enum SecondaryStage {
    Empty = "",
    Start = "Start",
}

export enum TargetStartDate {
    The06012021 = "06/01/2021",
    The07012021 = "07/01/2021",
}

export enum TypeOfWork {
    AdditionsAlterationsNewProject = "Additions, Alterations, New Project",
    Alterations = "Alterations",
    AlterationsInteriors = "Alterations, Interiors",
}
